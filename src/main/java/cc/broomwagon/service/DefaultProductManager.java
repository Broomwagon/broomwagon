package cc.broomwagon.service;

import cc.broomwagon.dao.ProductDao;
import cc.broomwagon.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DefaultProductManager implements ProductManager {
    @Autowired
    private ProductDao productDao;

    @Override
    public Iterable<Product> getProducts() {
        return productDao.getProducts();
    }
}
