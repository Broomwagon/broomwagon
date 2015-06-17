package cc.broomwagon.web.controller;

import cc.broomwagon.model.Product;
import cc.broomwagon.service.ProductManager;
import cc.broomwagon.web.exception.PageNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;
import java.util.Optional;

/**
 * Controller to handle products.
 */
//@Controller
@RequestMapping("/${web.mapping.products}")
public class ProductController {
    @Autowired
    private ProductManager productManager;

    @RequestMapping("")
    public String products(Map<String, Object> model) {
        model.put("products", productManager.getProducts());
        return "view/products";
    }

    @RequestMapping("{productUrl}")
    public String product(@PathVariable("productUrl") String productUrl, Map<String, Object> model) {
        Optional<Product> product = productManager.getProductByUrl(productUrl);

        if (!product.isPresent()) {
            throw new PageNotFoundException();
        }

        model.put("product", product.get());
        return "view/product";
    }
}
