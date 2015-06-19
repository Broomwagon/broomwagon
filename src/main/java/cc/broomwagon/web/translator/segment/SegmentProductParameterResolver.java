package cc.broomwagon.web.translator.segment;

import static java.util.stream.StreamSupport.stream;

import cc.broomwagon.model.Product;
import cc.broomwagon.service.ProductManager;
import com.google.common.base.Splitter;
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
    public Object resolve(Object in, String url) {
        Object result = in;

        if (in instanceof String) {
            String command = (String) in;

            if ("random".equals(command)) {
                Optional<Product> product = productManager.getProductById(1L);
                if (product.isPresent()) {
                    result = product.get();
                }
            } else if ("url".equals(command)) {
                Optional<String> lastPartOfPath = stream(Splitter.on("/")
                        .trimResults()
                        .omitEmptyStrings()
                        .split(url).spliterator(), false)
                        .reduce((previous, current) -> current);
                if (lastPartOfPath.isPresent()) {
                    Optional<Product> product = productManager.getProductByUrl(lastPartOfPath.get());
                    if (product.isPresent()) {
                        result = product.get();
                    } else {
//                        throw new PageNotFoundException(url); //TODO, make sure only relevant segments loading
                    }
                }
            }
        }

        return result;
    }
}
