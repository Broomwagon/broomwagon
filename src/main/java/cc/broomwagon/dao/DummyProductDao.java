package cc.broomwagon.dao;

import static com.google.common.collect.Lists.newArrayList;

import cc.broomwagon.model.Product;
import org.springframework.stereotype.Repository;

import java.util.Collection;

/**
 * Dummy dao - returns hardcoded products.
 */
@Repository
public class DummyProductDao implements ProductDao {
    @Override
    public Iterable<Product> getProducts() {
        return generateProducts(5);
    }

    private Iterable<Product> generateProducts(int numberOrProducts) {
        Collection<Product> products = newArrayList();

        for (int i = 0; i < numberOrProducts; i++) {
            products.add(Product.builder().title("title " + i).build());
        }

        return products;
    }
}
