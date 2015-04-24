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
        model.put("testOne", "yo yo 2");
        return "view/home";
    }
}
