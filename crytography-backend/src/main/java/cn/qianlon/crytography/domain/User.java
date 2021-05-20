package cn.qianlon.crytography.domain;


public class User {
    private String id;
    private String username;
    private String Token;

    public User(String id, String username) {
        this.id = id;
        this.username = username;
    }

    public String getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


    public String getToken() {
        return Token;
    }

    public void setToken(String token) {
        Token = token;
    }
}
