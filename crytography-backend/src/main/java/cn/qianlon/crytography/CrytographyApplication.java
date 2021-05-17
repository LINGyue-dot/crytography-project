package cn.qianlon.crytography;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.http.HttpMessageConverters;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class CrytographyApplication  {



    public static void main(String[] args) {
        SpringApplication.run(CrytographyApplication.class, args);
    }

}
