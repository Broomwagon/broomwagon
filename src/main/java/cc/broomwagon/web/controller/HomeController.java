package cc.broomwagon.web.controller;

import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Controller to display homepage.
 */
//@Controller("homeController")
public class HomeController {

    @RequestMapping("/")
    public String home() {
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
