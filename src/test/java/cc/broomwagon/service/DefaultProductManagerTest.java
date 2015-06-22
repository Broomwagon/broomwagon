package cc.broomwagon.service;

import static cc.broomwagon.TestFactory.aProduct;
import static com.google.common.collect.Iterables.size;
import static java.util.Collections.singletonList;
import static java.util.Optional.empty;
import static java.util.Optional.of;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;

import cc.broomwagon.dao.ProductDao;
import cc.broomwagon.model.Product;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.Collection;
import java.util.Optional;

@RunWith(MockitoJUnitRunner.class)
public class DefaultProductManagerTest {
    @InjectMocks
    private DefaultProductManager defaultProductManager;
    @Mock
    private ProductDao productDao;

    @Test
    public void shouldGetProducts() {
        // given
        Collection<Product> products = singletonList(aProduct());
        given(productDao.getProducts()).willReturn(products);

        // when
        Collection<Product> actual = defaultProductManager.getProducts();

        // then
        assertThat(actual, is(products));
    }


    @Test
    public void shouldGetEmptyProductList() {
        // given
        given(productDao.getProducts()).willReturn(null);

        // when
        Collection<Product> actual = defaultProductManager.getProducts();

        // then
        assertThat(size(actual), is(0));

    }

    @Test
    public void shouldNotGetProductByUrl() {
        // given
        String productUrl = "someUrl";
        given(productDao.getProductByUrl(productUrl)).willReturn(empty());

        // when
        Optional<Product> actual = defaultProductManager.getProductByUrl(productUrl);

        // then
        assertThat(actual.isPresent(), is(false));
    }

    @Test
    public void shouldGetProductByUrl() {
        // given
        String productUrl = "someUrl";
        Product product = aProduct(productUrl);
        given(productDao.getProductByUrl(productUrl)).willReturn(of(product));

        // when
        Optional<Product> actual = defaultProductManager.getProductByUrl(productUrl);

        // then
        assertThat(actual.get(), is(product));
    }

    @Test
    public void shouldAddProduct() {
        // given
        Product product = aProduct("hello");
        given(productDao.add(product)).willReturn(of(product));

        // when
        Optional<Product> actual = defaultProductManager.add(product);

        // then
        assertThat(actual.get(), is(product));
        verify(productDao).add(product);
    }
}