package cc.broomwagon.service;

import cc.broomwagon.model.Product;

import java.util.Optional;

/**
 * Class to retrieve/manipulate products.
 */
public interface ProductManager {
    Iterable<Product> getProducts();

    Optional<Product> getProductByUrl(String someurl);
}
