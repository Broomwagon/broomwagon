package cc.broomwagon.service;

import cc.broomwagon.model.Product;

/**
 * Class to retrieve/manipulate products.
 */
public interface ProductManager {
    Iterable<Product> getProducts();
}
