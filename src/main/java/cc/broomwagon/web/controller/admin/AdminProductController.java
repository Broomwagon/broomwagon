package cc.broomwagon.web.controller.admin;

import cc.broomwagon.service.ProductManager;
import cc.broomwagon.web.ui.ProductForm;
import cc.broomwagon.web.translator.ProductTranslator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.validation.Valid;
import java.util.Map;

/**
 * Controller for editing/displaying products
 */
@Controller
@RequestMapping("/admin/products")
public class AdminProductController {
    @Autowired
    private ProductManager productManager;
    @Autowired
    private ProductTranslator productTranslator;

    @ModelAttribute("product")
    public ProductForm populateProduct() {
        return new ProductForm();
    }

    @RequestMapping(method = RequestMethod.GET)
    public String showProducts(Map<String, Object> model) {
        model.put("products", productManager.getProducts());
        return "admin/view/home";
    }

    @RequestMapping(method = RequestMethod.POST)
    public String addProduct(@Valid @ModelAttribute("product") ProductForm product, BindingResult result, Map<String, Object> model) {

        if (result.hasErrors()) {
            return showProducts(model);
        }

        productManager.add(productTranslator.translate(product));
        return "redirect:/admin/products";
    }

}
