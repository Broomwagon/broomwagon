package cc.broomwagon.dao;

import static com.google.common.collect.Iterables.size;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

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
    public void shouldGetProducts() throws Exception {

        // when
        Iterable<Product> actual = dummyProductDao.getProducts();

        // then
        assertThat(size(actual), equalTo(5));
    }
}