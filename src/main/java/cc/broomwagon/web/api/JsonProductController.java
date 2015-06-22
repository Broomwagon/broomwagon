package cc.broomwagon.web.api;

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

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
public class JsonProductController {
    @Autowired
    private ProductManager productManager;

    @RequestMapping(method = RequestMethod.GET)
    public Collection<Product> find() {
        return productManager.getProducts();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Product get(@PathVariable("id") Long id) {
        Optional<Product> product = productManager.getProductById(id);
        if (!product.isPresent()) {
            throw new ItemNotFoundException();
        }
        return product.get();
    }

    @RequestMapping(method = RequestMethod.POST)
    public void add(@RequestBody ProductForm product) {
        System.out.println("Saving: " + product);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public void update(@RequestBody ProductForm product, @PathVariable Long id) {
        System.out.println("Updating: " + product);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        System.out.println("Deleting: " + id);
    }
}
