package cn.qianlon.crytography.service;

import cn.qianlon.crytography.utils.RSA.Rsa;

import java.math.BigInteger;

public class LoginService {
    private static Rsa rsa = new Rsa();

    public static boolean isValidPassword(String str) {
        BigInteger temp = new BigInteger(str);
        // 获取到明文
        String password = rsa.decryptToString(temp);

        // 输出密码明文
        System.out.println("below is  password from frontend : ");
        System.out.println(password);
        return true;

    }

}
