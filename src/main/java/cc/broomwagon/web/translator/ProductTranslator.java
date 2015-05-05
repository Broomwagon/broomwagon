package cc.broomwagon.web.translator;

import static org.springframework.util.StringUtils.hasText;
import static org.springframework.util.StringUtils.replace;

import cc.broomwagon.model.Product;
import cc.broomwagon.web.form.ProductForm;
import org.springframework.stereotype.Component;

/**
 * Class to translate between product and product form.
 */
@Component
public class ProductTranslator {

    public Product translate(ProductForm form) {
        return Product.builder()
                .title(form.getTitle())
                .url(generateUrl(form.getUrl(), form.getTitle()))
                .build();
    }

    private String generateUrl(String url, String title) {
        String result;
        if (!hasText(url)) {
            url = title;
        }

        result = replace(url.toLowerCase(), " ", "-");

        return result;
    }
}
