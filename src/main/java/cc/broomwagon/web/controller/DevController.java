package cc.broomwagon.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

/**
 * Controller for dev purposes to display templates. *DELETE*
 */
@Controller
@RequestMapping("/dev")
public class DevController {

    @RequestMapping("{template}")
    public String product(@PathVariable("template") String template, Map<String, Object> model) {
        return "view/dev/" + template;
    }
}
