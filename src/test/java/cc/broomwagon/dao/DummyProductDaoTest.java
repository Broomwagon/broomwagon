package cc.broomwagon.dao;

import static com.google.common.collect.Iterables.size;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.nullValue;

import cc.broomwagon.TestFactory;
import cc.broomwagon.model.Product;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.runners.MockitoJUnitRunner;

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
        Product product = TestFactory.aProduct(productUrl);
        dummyProductDao.products.put(productUrl, product);

        // when
        Product actual = dummyProductDao.getProductByUrl(productUrl);

        // then
        assertThat(actual, is(product));
    }

    @Test
    public void shouldNotGetProductByUrl() {
        // given
        String productUrl = "productUrl";

        // when
        Product actual = dummyProductDao.getProductByUrl(productUrl);

        // then
        assertThat(actual, is(nullValue()));
    }
}