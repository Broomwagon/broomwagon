package cc.broomwagon.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

/**
 * Controller to display homepage.
 */
@Controller
public class HomeController {

    @RequestMapping("/")
    public String home(Map<String, Object> model) {
        return "view/home";
    }

    @RequestMapping("/admin")
    public String adminHome(){
        return "admin/view/index";
    }

    @RequestMapping("/adminDemo/")
    public String adminDemoHome(){
        return "adminDemo/view/index";
    }
}
