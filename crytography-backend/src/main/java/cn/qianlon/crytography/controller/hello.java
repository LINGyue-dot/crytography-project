package cn.qianlon.crytography.controller;

import cn.qianlon.crytography.domain.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
public class hello {

    @PostMapping("testJson")
    public User testJson(@RequestBody User user) {
        return user;
    }
}
