package cc.broomwagon.web.translator;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

import cc.broomwagon.model.Product;
import cc.broomwagon.web.ui.ProductForm;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.runners.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class ProductTranslatorTest {
    @InjectMocks
    private ProductTranslator productTranslator;

    @Test
    public void shouldTranslate() {
        // given
        ProductForm form = new ProductForm();
        form.setTitle("title1");

        // when
        Product actual = productTranslator.translate(form);

        // then
        assertThat(actual.getTitle(), is("title1"));
        assertThat(actual.getUrl(), is("title1"));
    }
}