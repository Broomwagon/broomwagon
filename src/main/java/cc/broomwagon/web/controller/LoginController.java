package cc.broomwagon.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Login form.
 */
@Controller
public class LoginController {

    @RequestMapping("/login")
    public String login() {
        return "view/login";
    }
}
