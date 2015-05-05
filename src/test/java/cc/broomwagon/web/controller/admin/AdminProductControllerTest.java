package cc.broomwagon.web.controller.admin;

import static cc.broomwagon.TestFactory.aProduct;
import static com.google.common.collect.Iterables.size;
import static com.google.common.collect.Lists.newArrayList;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.isA;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;

import cc.broomwagon.model.Product;
import cc.broomwagon.service.ProductManager;
import cc.broomwagon.web.form.ProductForm;
import cc.broomwagon.web.translator.ProductTranslator;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.validation.BindingResult;

import java.util.HashMap;
import java.util.Map;

@RunWith(MockitoJUnitRunner.class)
public class AdminProductControllerTest {
    @InjectMocks
    private AdminProductController adminProductController;
    @Mock
    private ProductManager productManager;
    @Mock
    private ProductTranslator productTranslator;

    @Test
    public void shouldShowProducts() {
        // given
        given(productManager.getProducts()).willReturn(newArrayList(aProduct()));
        Map<String, Object> model = new HashMap<>();

        // when
        String actual = adminProductController.showProducts(model);

        // then
        assertThat(actual, is("admin/view/home"));
        assertThat(size((Iterable<Product>) model.get("products")), is(notNullValue()));
    }

    @Test
    public void shouldNotAddProduct() {
        // given
        given(productManager.getProducts()).willReturn(newArrayList(aProduct()));
        BindingResult result = mock(BindingResult.class);
        given(result.hasErrors()).willReturn(true);

        // when
        String actual = adminProductController.addProduct(new ProductForm(), result, new HashMap<>());

        // then
        assertThat(actual, is("admin/view/home"));
        verify(productManager).getProducts();
    }

    @Test
    public void shouldAddProduct() {
        // given
        given(productManager.getProducts()).willReturn(newArrayList(aProduct()));
        BindingResult result = mock(BindingResult.class);
        given(result.hasErrors()).willReturn(false);

        // when
        String actual = adminProductController.addProduct(new ProductForm(), result, new HashMap<>());

        // then
        assertThat(actual, is("redirect:/admin/products"));
        verify(productManager, never()).getProducts();
        verify(productTranslator).translate(isA(ProductForm.class));
    }
}