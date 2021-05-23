package cn.qianlon.crytography.utils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import java.io.PrintWriter;


@Component
public class MyInterceptor implements HandlerInterceptor {

    private static final Logger logger = LoggerFactory.getLogger(MyInterceptor.class);

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        System.out.println(request.getParameter("token") != null && Token.validToken(request.getParameter("token")));
        if (request.getRequestURI().equals("/login")) // 登入就直接放行
            return true;
        if (request.getParameter("token") != null && Token.validToken(request.getParameter("token"))) {
            System.out.println("28-----------------------------------------");
            return true;
        } else {
            RestApi restApi = new RestApi(403, "token is not valided", null, false);
            PrintWriter writer = response.getWriter();
            String tempJson = JSON.toJSONString(restApi);
            writer.append(tempJson);
            return false;
        }
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
//        logger.info("执行完方法之后进执行(Controller方法调用之后)，但是此时还没进行视图渲染");
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
//        logger.info("整个请求都处理完咯，DispatcherServlet也渲染了对应的视图咯，此时我可以做一些清理的工作了");
    }
}