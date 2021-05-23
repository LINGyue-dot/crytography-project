package cn.qianlon.crytography.controller;


import cn.qianlon.crytography.custom.RequestPostLogin;
import cn.qianlon.crytography.domain.User;
import cn.qianlon.crytography.service.LoginService;
import cn.qianlon.crytography.utils.RestApi;
import cn.qianlon.crytography.utils.Token;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletResponse;


@RestController
public class Login implements HandlerInterceptor {

    @CrossOrigin
    @PostMapping("/login")
    public RestApi login(@RequestBody RequestPostLogin requestPostLogin, HttpServletResponse response) {

        User tempUser = new User("1", requestPostLogin.getAccount());

        if (LoginService.isValidPassword(requestPostLogin.getPassword())) { // 密码验证通过
            tempUser.setToken(Token.generateToken(requestPostLogin.getAccount()));

            RestApi restApi = new RestApi(200, "success", tempUser, true);
//            response.addHeader("X-Token", Token.generateToken(requestPostLogin.getAccount()));
//            response.setHeader("Access-Control-Allow-Headers", "Authorization, x-xsrf-token, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, " +
//                    "Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

            return restApi;
        } else {
            RestApi restApi = new RestApi(0, "error password", tempUser, false);

            return restApi;
        }
    }

    @CrossOrigin
    @GetMapping("/hello")
    public RestApi hello() {
        User tempUser = new User("1", "qianlong");
        //根据自己的需要动态添加你想要的content type
        RestApi restApi = new RestApi(200, "token success", tempUser, false);
        return restApi;
    }
}

