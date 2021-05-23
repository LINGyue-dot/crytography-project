package cn.qianlon.crytography;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
//import org.springframework.boot.web.servlet.ServletComponentScan;

@SpringBootApplication()
//@ServletComponentScan
public class CrytographyApplication {
    public static void main(String[] args) {
        SpringApplication.run(CrytographyApplication.class, args);
    }
}
