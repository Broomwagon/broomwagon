package cc.broomwagon.web.controller;

import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

/**
 * Controller to handle categories.
 */
//@Controller
public class CategoryController {

    @RequestMapping("/**")
    public String category(Map<String, Object> model) {
        return "view/category";
    }
}
