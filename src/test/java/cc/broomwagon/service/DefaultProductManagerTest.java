package cc.broomwagon.service;

import static com.google.common.collect.Lists.newArrayList;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;

import cc.broomwagon.dao.ProductDao;
import cc.broomwagon.model.Product;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class DefaultProductManagerTest {
    @InjectMocks
    private DefaultProductManager defaultProductManager;
    @Mock
    private ProductDao productDao;

    @Test
    public void shouldGetProducts() {
        // given
        Iterable<Product> products = newArrayList(new Product());
        given(productDao.getProducts()).willReturn(products);

        // when
        Iterable<Product> actual = defaultProductManager.getProducts();

        // then
        assertThat(actual, is(products));
    }
}