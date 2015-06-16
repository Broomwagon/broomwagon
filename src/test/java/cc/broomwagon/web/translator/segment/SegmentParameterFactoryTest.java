package cc.broomwagon.web.translator.segment;

import static cc.broomwagon.TestFactory.aProduct;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.anyObject;
import static org.mockito.Mockito.verify;

import cc.broomwagon.model.Product;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@RunWith(MockitoJUnitRunner.class)
public class SegmentParameterFactoryTest {
    @InjectMocks
    private SegmentParameterFactory segmentParameterFactory;
    @Mock
    private SegmentParameterResolver resolver;

    @Before
    public void setup() {
        Collection<SegmentParameterResolver> resolvers = new ArrayList<>();
        resolvers.add(resolver);
        segmentParameterFactory.resolvers = resolvers;
    }

    @Test
    public void shouldTranslateProduct() {
        // given
        Product product = aProduct();
        Map<String, Object> map = new HashMap<>();
        map.put("_product", "random");
        given(resolver.key()).willReturn("_product");
        given(resolver.resolve(anyObject())).willReturn(product);

        // when
        Map<String, Object> actual = segmentParameterFactory.translate(map);

        // then
        verify(resolver).key();
        assertThat(actual.get("_product"), is(product));
    }
}