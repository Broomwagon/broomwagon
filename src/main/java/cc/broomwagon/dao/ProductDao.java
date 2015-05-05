package cc.broomwagon.dao;

import cc.broomwagon.model.Product;

/**
 * Interface to retrieve Products.
 */
public interface ProductDao {
    Iterable<Product> getProducts();

    Product getProductByUrl(String url);

    Product add(Product product);
}
