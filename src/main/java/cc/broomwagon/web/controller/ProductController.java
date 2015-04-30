package cc.broomwagon.web.controller;

import cc.broomwagon.model.Product;
import cc.broomwagon.service.ProductManager;
import cc.broomwagon.web.exception.PageNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;
import java.util.Optional;

/**
 * Controller to handle products.
 */
@Controller
public class ProductController {
    @Autowired
    private ProductManager productManager;

    @RequestMapping("/{productUrl}")
    public String product(@PathVariable("productUrl") String productUrl, Map<String, Object> model) {
        Optional<Product> product = productManager.getProductByUrl(productUrl);

        if (!product.isPresent()) {
            throw new PageNotFoundException();
        }

        model.put("product", product.get());
        return "view/product";
    }
}
