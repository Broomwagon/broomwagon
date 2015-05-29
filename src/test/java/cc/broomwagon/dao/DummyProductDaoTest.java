package cc.broomwagon.dao;

import static cc.broomwagon.TestFactory.aProduct;
import static com.google.common.collect.Iterables.size;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;

import cc.broomwagon.model.Product;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.Optional;

@RunWith(MockitoJUnitRunner.class)
public class DummyProductDaoTest {
    @InjectMocks
    private DummyProductDao dummyProductDao;

    @Test
    public void shouldGetProducts() {

        // when
        Iterable<Product> actual = dummyProductDao.getProducts();

        // then
        assertThat(size(actual), equalTo(5));
    }

    @Test
    public void shouldGetProductByUrl() {
        // given
        String productUrl = "productUrl";
        Product product = aProduct(productUrl);
        dummyProductDao.products.put(productUrl, product);

        // when
        Optional<Product> actual = dummyProductDao.getProductByUrl(productUrl);

        // then
        assertThat(actual.get(), is(product));
    }

    @Test
    public void shouldNotGetProductByUrl() {
        // given
        String productUrl = "productUrl";

        // when
        Optional<Product> actual = dummyProductDao.getProductByUrl(productUrl);

        // then
        assertThat(actual.isPresent(), is(false));
    }

    @Test
    public void shouldAddProduct() {
        // given;
        Integer initialSize = size(dummyProductDao.products.values());
        Product product = aProduct("test");

        // when
        Optional<Product> actual = dummyProductDao.add(product);

        // then
        assertThat(actual.get(), is(product));
        assertThat(dummyProductDao.products.values(), hasSize(initialSize + 1));
    }
}