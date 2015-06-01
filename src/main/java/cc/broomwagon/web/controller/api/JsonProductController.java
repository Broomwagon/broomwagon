package cc.broomwagon.web.controller.api;

import cc.broomwagon.model.Product;
import cc.broomwagon.service.ProductManager;
import cc.broomwagon.web.exception.ItemNotFoundException;
import cc.broomwagon.web.ui.ProductForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/${web.mapping.products}")
public class JsonProductController {
    @Autowired
    private ProductManager productManager;

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Product> products() {
        return productManager.getProducts();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Product product(@PathVariable("id") Long id) {
        Optional<Product> product = productManager.getProductById(id);
        if (!product.isPresent()) {
            throw new ItemNotFoundException();
        }
        return product.get();
    }

    @RequestMapping(method = RequestMethod.POST)
    public void addProduct(@RequestBody ProductForm product) {
        System.out.println("Saving: " + product);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public void updateProduct(@RequestBody ProductForm product, @PathVariable Integer id) {
        System.out.println("Updating: " + product);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteProduct(@PathVariable Integer id) {
        System.out.println("Deleting: " + id);
    }
}
