package cc.broomwagon;

import static com.google.common.collect.Lists.newArrayList;

import cc.broomwagon.model.Menu;
import cc.broomwagon.model.MenuItem;
import cc.broomwagon.model.Product;

/**
 * Created by vladimir.
 */
public final class TestFactory {

    private TestFactory() {
        // Don't instantiate
    }

    public static Product aProduct() {
        return aProduct("url");
    }

    public static Product aProduct(String url) {
        return Product.builder()
                .title("title")
                .url(url)
                .build();
    }

    public static Menu aMenu() {
        return new Menu(
                MenuItem.builder()
                        .name("Menu")
                        .url("parentUrl").build(),
                newArrayList(MenuItem.builder()
                        .name("name")
                        .url("url").build()));
    }

}
