package cc.broomwagon.web.controller;

import static cc.broomwagon.TestFactory.aProduct;
import static java.util.Optional.empty;
import static java.util.Optional.of;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;

import cc.broomwagon.model.Product;
import cc.broomwagon.service.ProductManager;
import cc.broomwagon.web.exception.PageNotFoundException;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.HashMap;
import java.util.Map;

@RunWith(MockitoJUnitRunner.class)
public class ProductControllerTest {
    @InjectMocks
    private ProductController productController;
    @Mock
    private ProductManager productManager;

    @Test
    public void shouldDisplayProduct() {
        // given
        Map<String, Object> model = new HashMap<>();
        String productUrl = "someurl";
        Product product = aProduct(productUrl);
        given(productManager.getProductByUrl(productUrl)).willReturn(of(product));

        // when
        String actual = productController.product(productUrl, model);

        // then
        assertThat(actual, is("view/product"));
        assertThat(model.get("product"), is(product));
    }

    @Test(expected = PageNotFoundException.class)
    public void shouldThrowNotFound() {
        // given
        Map<String, Object> model = new HashMap<>();
        String productUrl = "someurl";
        given(productManager.getProductByUrl(productUrl)).willReturn(empty());

        // when
        String actual = productController.product(productUrl, model);

        // then exception
    }
}