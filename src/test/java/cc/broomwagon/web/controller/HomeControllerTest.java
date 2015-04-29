package cc.broomwagon.web.controller;

import static cc.broomwagon.TestFactory.aProduct;
import static com.google.common.collect.Iterables.size;
import static com.google.common.collect.Lists.newArrayList;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.mockito.BDDMockito.given;

import cc.broomwagon.model.Product;
import cc.broomwagon.service.ProductManager;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.HashMap;
import java.util.Map;

@RunWith(MockitoJUnitRunner.class)
public class HomeControllerTest {
    @InjectMocks
    private HomeController homeController;
    @Mock
    private ProductManager productManager;

    @SuppressWarnings("unchecked")
    @Test
    public void shouldDisplayHome() {
        // given
        given(productManager.getProducts()).willReturn(newArrayList(aProduct()));
        Map<String, Object> model = new HashMap<>();

        // when
        String actual = homeController.home(model);

        // then
        assertThat(actual, is("view/home"));
        assertThat(size((Iterable<Product>) model.get("products")), is(notNullValue()));
    }
}