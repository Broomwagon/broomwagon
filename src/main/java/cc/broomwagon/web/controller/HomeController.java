package cc.broomwagon.web.controller;

import cc.broomwagon.service.ProductManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

/**
 * Controller to display homepage.
 */
@Controller
public class HomeController {

    @Autowired
    private ProductManager productManager;

    @RequestMapping("/")
    public String home(Map<String, Object> model) {
        model.put("products", productManager.getProducts());
        return "view/home";
    }
}
