package cc.broomwagon;

import static com.google.common.collect.Lists.newArrayList;
import static com.google.common.collect.Maps.newHashMap;

import cc.broomwagon.model.menu.Menu;
import cc.broomwagon.model.menu.MenuConfig;
import cc.broomwagon.model.menu.MenuItem;
import cc.broomwagon.model.menu.MenuItemConfig;
import cc.broomwagon.model.Product;

import java.util.Map;

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
        Map<String, Iterable<MenuItem>> items = newHashMap();
        items.put("Group1", newArrayList(MenuItem.builder()
                .name("name")
                .url("url").build()));
        return new Menu(
                MenuItem.builder()
                        .name("Menu")
                        .url("parentUrl").build(), items
                );
    }

    public static MenuConfig aMenuConfig() {
        Map<String, MenuItemConfig> config = newHashMap();
        config.put("Page Elements", MenuItemConfig.builder().appendDivider(true).build());
        return new MenuConfig("All", config);
    }

}
