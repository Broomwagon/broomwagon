package cc.broomwagon.web.controller.admin;

import cc.broomwagon.service.ProductManager;
import cc.broomwagon.web.ui.ProductForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@Controller
@RequestMapping("/admin")
public class AdminHomeController {
    @Autowired
    private ProductManager productManager;

    @RequestMapping("")
    public String home(Map<String, Object> model) {
        model.put("products", productManager.getProducts());
        return "admin/view/home";
    }

    @ModelAttribute("product")
    public ProductForm populateProduct() {
        return new ProductForm();
    }
}
