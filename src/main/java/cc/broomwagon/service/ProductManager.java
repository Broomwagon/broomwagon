package cc.broomwagon.service;

import cc.broomwagon.model.Product;

import java.util.Optional;

/**
 * Interface to retrieve/manipulate products.
 */
public interface ProductManager {
    Iterable<Product> getProducts();

    Optional<Product> getProductByUrl(String url);

    Optional<Product> getProductById(Long id);

    Optional<Product> add(Product product);
}
