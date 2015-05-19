package cc.broomwagon.dao;

import static com.google.common.collect.Lists.newArrayList;
import static com.google.common.collect.Maps.newHashMap;

import cc.broomwagon.model.menu.Menu;
import cc.broomwagon.model.menu.MenuConfig;
import cc.broomwagon.model.menu.MenuItem;
import cc.broomwagon.model.menu.MenuItemConfig;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Map;

/**
 * Dummy dao - returns hardcoded menu items.
 */
@Repository
public class DummyMenuDao implements MenuDao {

    @Override
    public Menu mainMenu() {
        Map<String, Iterable<MenuItem>> items = newHashMap();
        items.put("Group1", generateMenuItems());
        return new Menu(MenuItem.builder()
                .name("All")
                .url("/products/").build(),
                items);
    }

    @Override
    public MenuConfig config(String menuName) {
        Map<String, MenuItemConfig> config = newHashMap();
        config.put("Page Elements", MenuItemConfig.builder().appendDivider(true).build());
        return new MenuConfig("All", config);
    }

    private Iterable<MenuItem> generateMenuItems() {
        Collection<MenuItem> menuItems = newArrayList();
        menuItems.add(generateMenuItem("/products/", "All products"));
        menuItems.add(generateMenuItem("/products/url1", "Single product"));
        menuItems.add(generateMenuItem("/dev/contact.html", "Contact us"));
        menuItems.add(generateMenuItem("/dev/about.html", "About Us"));
        menuItems.add(generateMenuItem("/dev/static.html", "Page Elements"));
        menuItems.add(generateMenuItem("/login", "Login"));
        menuItems.add(generateMenuItem("/dev/signup.html", "Signup"));
        menuItems.add(generateMenuItem("/dev/cart.html", "My cart"));
        menuItems.add(generateMenuItem("/dev/profile.html", "Edit profile"));
        menuItems.add(generateMenuItem("/dev/history.html", "Order history"));
        menuItems.add(generateMenuItem("/dev/wishlist.html", "Wishlist"));
        return menuItems;
    }

    private MenuItem generateMenuItem(String url, String name) {
        return MenuItem
                .builder()
                .name(name)
                .url(url)
                .build();
    }
}
