package cc.broomwagon;

import static com.google.common.collect.Lists.newArrayList;
import static com.google.common.collect.Maps.newHashMap;
import static java.util.Collections.emptyList;

import cc.broomwagon.model.Product;
import cc.broomwagon.model.menu.Menu;
import cc.broomwagon.model.menu.MenuConfig;
import cc.broomwagon.model.menu.MenuItem;
import cc.broomwagon.model.menu.MenuItemConfig;
import cc.broomwagon.model.menu.MenuItemGroup;
import cc.broomwagon.model.page.Page;
import cc.broomwagon.model.page.Segment;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

/**
 * Utility class to help with tests.
 */
public final class TestFactory {

    private TestFactory() {
        // No need to instantiate
    }

    public static Product aProduct() {
        return aProduct("url");
    }

    public static Product aProduct(String url) {
        return Product.builder()
                .title("title")
                .id(1L)
                .url(url)
                .build();
    }

    public static Menu aMenu() {
        return aMenu("MenuName");
    }

    public static Menu aMenu(String name) {
        Collection<MenuItemGroup> groups = newArrayList(
                new MenuItemGroup("Group1", newArrayList(MenuItem.builder()
                        .name("name")
                        .url("url").build())));

        return new Menu(
                MenuItem.builder()
                        .name(name)
                        .url("parentUrl").build(), groups
                );
    }

    public static MenuConfig aMenuConfig() {
        Map<String, MenuItemConfig> config = newHashMap();
        Map<String, Object> attributes = newHashMap();
        attributes.put("appendDivider", Boolean.TRUE);
        config.put("Page Elements", MenuItemConfig.builder().attributes(attributes).build());
        return new MenuConfig("All", newHashMap(), config, newHashMap());
    }

    public static Page aPage() {
        return Page.builder()
                .id(1L)
                .title("title")
                .url("/")
                .segments(emptyList())
                .build();
    }

    public static Segment aSegment() {
        return Segment.builder()
                .id(1L)
                .template("template")
                .fragment("fragment")
                .cssClass("some css class")
                .parameters(new HashMap<>())
                .build();
    }
}
