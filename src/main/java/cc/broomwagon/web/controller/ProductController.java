package cc.broomwagon.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

/**
 * Controller to handle products.
 */
@Controller
public class ProductController {

    @RequestMapping("/*")
    public String product(Map<String, Object> model) {
        return "view/product";
    }
}
