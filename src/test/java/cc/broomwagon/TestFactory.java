package cc.broomwagon;

import cc.broomwagon.model.Product;

/**
 * Created by vladimir.
 */
public final class TestFactory {

    private TestFactory() {
        // Don't instantiate
    }

    public static Product aProduct() {
        return Product.builder()
                .title("title")
                .url("url")
                .build();
    }

}
