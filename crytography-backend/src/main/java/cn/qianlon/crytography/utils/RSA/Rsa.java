package cn.qianlon.crytography.utils.RSA;

import javax.swing.*;
import java.math.BigInteger;

/**
 * RSA加密、解密、测试正确性
 */
public class Rsa {
    /*
     * @param p
     * @param q
     * @return
     */
    public BigInteger[][] genKey(BigInteger p, BigInteger q) {
        BigInteger n = p.multiply(q);
        BigInteger fy = p.subtract(BigInteger.ONE).multiply(q.subtract(BigInteger.ONE));
        BigInteger e = new BigInteger("3889");
        // generate d
        BigInteger a = e;
        BigInteger b = fy;
        BigInteger[] rxy = new cn.qianlon.crytography.utils.Rsa.GCD().extGcd(a, b);
        BigInteger r = rxy[0];
        BigInteger x = rxy[1];
        BigInteger y = rxy[2];

        BigInteger d = x;
        // 公钥  私钥
        return new BigInteger[][]{{n, e}, {n, d}};
    }

    /**
     * 加密
     *
     * @param m      被加密的信息转化成为大整数m
     * @param pubkey 公钥
     * @return
     */
    public BigInteger encrypt(BigInteger m, BigInteger[] pubkey) {
        BigInteger n = pubkey[0];
        BigInteger e = pubkey[1];

        BigInteger c = new cn.qianlon.crytography.utils.Rsa.Exponentiation().expMode(m, e, n);
        return c;
    }

    /**
     * 解密
     *
     * @param c
     * @param selfkey 私钥
     * @return
     */
    public BigInteger decrypt(BigInteger c, BigInteger[] selfkey) {
        BigInteger n = selfkey[0];
        BigInteger d = selfkey[1];

        BigInteger m = new cn.qianlon.crytography.utils.Rsa.Exponentiation().expMode(c, d, n);
        return m;
    }

    /**
     * 将前端发送的 bigInteger密文 转换为 明文
     *
     * @param num
     * @return
     */
    public String decryptToString(BigInteger num) {
        BigInteger d = new Rsa().decrypt(num, RSAConfig.selfKey);
        byte[] tempByteArr = d.toByteArray();
        String tempStr = new String(tempByteArr);
        System.out.println(tempStr);
        return tempStr;
    }


//    public static void main(String[] args) {
//        // 公钥私钥中用到的两个大质数p,q'''
////        BigInteger p = new BigInteger("106697219132480173106064317148705638676529121742557567770857687729397446898790451577487723991083173010242416863238099716044775658681981821407922722052778958942891831033512463262741053961681512908218003840408526915629689432111480588966800949428079015682624591636010678691927285321708935076221951173426894836169");
////        BigInteger q = new BigInteger("144819424465842307806353672547344125290716753535239658417883828941232509622838692761917211806963011168822281666033695157426515864265527046213326145174398018859056439431422867957079149967592078894410082695714160599647180947207504108618794637872261572262805565517756922288320779308895819726074229154002310375209");
//
//        Rsa rsa = new Rsa();
//        // 生成公钥私钥'''
//        // pubkey, selfkey = gen_key(p, q)
//        BigInteger[][] keys = rsa.genKey(p, q);
//        BigInteger[] pubkey = keys[0];
//        BigInteger[] selfkey = keys[1];
//
//
//        String tempStr = "hello";
//        byte[] tempByteArr1 = tempStr.getBytes();
//        BigInteger m = new BigInteger(tempByteArr1);
//
//        System.out.println("被加密信息：" + m);
//        // 信息加密'''
//        BigInteger c = rsa.encrypt(m, pubkey);
//        System.out.println("密文：" + c);
//        // 信息解密'''
//        BigInteger d = rsa.decrypt(c, selfkey);
//
//        byte[] tempByteArr2 = d.toByteArray();
//
//
//        System.out.println("被解密后信息：" + new String(tempByteArr2));
//    }
}
