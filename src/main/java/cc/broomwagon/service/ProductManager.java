package cc.broomwagon.service;

import cc.broomwagon.model.Product;

import java.util.Collection;
import java.util.Optional;

/**
 * Interface to retrieve/manipulate products.
 */
public interface ProductManager {
    Collection<Product> getProducts();

    Optional<Product> getProductByUrl(String url);

    Optional<Product> getProductById(Long id);

    Optional<Product> add(Product product);
}
