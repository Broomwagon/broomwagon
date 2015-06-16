package cc.broomwagon.web.translator.segment;

import cc.broomwagon.model.Product;
import cc.broomwagon.service.ProductManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

/**
 * Resolving Products from CMS.
 */
@Component
public class SegmentProductParameterResolver implements SegmentParameterResolver {
    @Autowired
    private ProductManager productManager;

    @Override
    public String key() {
        return "_product";
    }

    @Override
    public Object resolve(Object in) {
        Object result = in;

        if (in instanceof String) {
            String command = (String) in;

            if ("random".equals(command)) {
                Optional<Product> product = productManager.getProductById(1L);
                if (product.isPresent()) {
                    result = product.get();
                }
            }
        }

        return result;
    }
}
