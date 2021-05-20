package cn.qianlon.crytography.utils;

import cn.qianlon.crytography.utils.MD5.Md5;

/**
 * 签发以及验证token
 */
public class Token {

    /**
     * 生成 token
     * @param account
     * @return
     */
    public static String generateToken(String account) {
        String tempStr = account + "1";
        return account + " " + Md5.decryMd5(tempStr);
    }

    /**
     * token 验证
     * @param token
     * @return
     */
    public static boolean validToken(String token) {
        // 获取 account
        String account = token.split(" ")[0];
        // 获取 token
        String realToken = token.split(" ")[1];
        // 验证 token
        return realToken.equals(Md5.decryMd5(account + "1"));
    }
}
