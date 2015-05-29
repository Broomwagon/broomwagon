package cc.broomwagon.dao;

import cc.broomwagon.model.Product;

import java.util.Optional;

/**
 * Interface to retrieve Products.
 */
public interface ProductDao {
    Iterable<Product> getProducts();

    Optional<Product> getProductByUrl(String url);

    Optional<Product> getProductById(Long id);

    Optional<Product> add(Product product);
}
