package cc.broomwagon.service;

import static com.google.common.collect.Lists.newArrayList;
import static java.util.Optional.ofNullable;

import cc.broomwagon.dao.ProductDao;
import cc.broomwagon.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DefaultProductManager implements ProductManager {
    @Autowired
    private ProductDao productDao;

    @Override
    public Iterable<Product> getProducts() {
        return productDao.getProducts() != null ? productDao.getProducts() : newArrayList();
    }

    @Override
    public Optional<Product> getProductByUrl(String someurl) {
        return ofNullable(productDao.getProductByUrl(someurl));
    }

    @Override
    public Optional<Product> add(Product product) {
        return ofNullable(productDao.add(product));
    }
}
