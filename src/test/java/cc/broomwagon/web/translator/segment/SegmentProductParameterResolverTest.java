package cc.broomwagon.web.translator.segment;

import static cc.broomwagon.TestFactory.aProduct;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.any;

import cc.broomwagon.model.Product;
import cc.broomwagon.service.ProductManager;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.Optional;

@RunWith(MockitoJUnitRunner.class)
public class SegmentProductParameterResolverTest {
    @InjectMocks
    private SegmentProductParameterResolver segmentProductParameterResolver;
    @Mock
    private ProductManager productManager;

    @Test
    public void shouldReturnKey() {

        // when
        String actual = segmentProductParameterResolver.key();

        // then
        assertThat(actual, is("_product"));
    }

    @Test
    public void shouldResolve() {
        // given
        given(productManager.getProductById(any(Long.class))).willReturn(Optional.of(aProduct()));

        // when
        Object actual = segmentProductParameterResolver.resolve("random", "");

        // then
        assertThat(actual, is(notNullValue()));
    }

    @Test
    public void shouldNotResolve() {
        // given
        given(productManager.getProductById(any(Long.class))).willReturn(Optional.empty());

        // when
        Object actual = segmentProductParameterResolver.resolve("random", "");

        // then
        assertThat(actual, is("random"));
    }

    @Test
    public void shouldResolveUsingUrl() {
        // given
        Product product = aProduct("something");
        given(productManager.getProductByUrl("something")).willReturn(Optional.of(product));

        // when
        Object actual = segmentProductParameterResolver.resolve("url", "/url/something");

        // then
        assertThat(actual, is(product));
    }
}