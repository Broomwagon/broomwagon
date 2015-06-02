package cc.broomwagon.web.api;

import static cc.broomwagon.TestFactory.aProduct;
import static com.google.common.collect.Iterables.size;
import static java.util.Collections.singletonList;
import static java.util.Optional.empty;
import static java.util.Optional.of;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.any;

import cc.broomwagon.model.Product;
import cc.broomwagon.service.ProductManager;
import cc.broomwagon.web.exception.ItemNotFoundException;
import cc.broomwagon.web.ui.ProductForm;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class JsonProductControllerTest {
    @InjectMocks
    private JsonProductController jsonProductController;
    @Mock
    private ProductManager productManager;

    @Test
    public void shouldReturnProducts() {
        // given
        given(productManager.getProducts()).willReturn(singletonList(aProduct()));

        // when
        Iterable<Product> actual = jsonProductController.products();

        // then
        assertThat(size(actual), is(1));
    }

    @Test
    public void shouldGetProduct() {
        // given
        given(productManager.getProductById(1l)).willReturn(of(aProduct()));

        // when
        Product actual = jsonProductController.product(1l);

        // then
        assertThat(actual, is(notNullValue()));
    }

    @Test(expected = ItemNotFoundException.class)
    public void shouldThrowExceptionIfNoProduct() {
        // given
        given(productManager.getProductById(any(Long.class))).willReturn(empty());

        // when
        jsonProductController.product(2l);

        // then
        // exception
    }

    @Test
    public void shouldAddProduct() {

        // when
        jsonProductController.addProduct(new ProductForm());

        //TODO
    }

    @Test
    public void shouldUpdateProduct() {

        // when
        jsonProductController.updateProduct(new ProductForm(), 1L);

        //TODO
    }

    @Test
    public void shouldDeleteProduct() {

        // when
        jsonProductController.deleteProduct(1L);

        //TODO
    }
}