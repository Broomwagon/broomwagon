package cc.broomwagon.dao;

import static com.google.common.collect.Lists.newArrayList;
import static com.google.common.collect.Maps.newHashMap;

import cc.broomwagon.model.menu.Menu;
import cc.broomwagon.model.menu.MenuConfig;
import cc.broomwagon.model.menu.MenuItem;
import cc.broomwagon.model.menu.MenuItemConfig;
import cc.broomwagon.model.menu.MenuItemGroup;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Map;

/**
 * Dummy dao - returns hardcoded menu items.
 */
@Repository
public class DummyMenuDao implements MenuDao {

    @Override
    public Iterable<Menu> menus() {
        Collection<MenuItemGroup> allGroups = newArrayList(
                new MenuItemGroup("Static Pages", generateStaticMenuItems()),
                new MenuItemGroup("My Account", generateMyAccountMenuItems()),
                new MenuItemGroup("Brands", generateBrandMenuItems()));

        Collection<MenuItemGroup> myAcountGroup = newArrayList(
                new MenuItemGroup("My Account", generateMyAccountMenuItems()));

        Collection<Menu> menus = newArrayList();
        menus.add(new Menu(MenuItem.builder().name("Sample menu").url("/products/").build(), allGroups));
        menus.add(new Menu(MenuItem.builder().name("Other").url("/products/").build(), allGroups));
        menus.add(new Menu(MenuItem.builder().name("And Another").url("/products/").build(), allGroups));
        menus.add(new Menu(MenuItem.builder().name("My Account").url("/products/").build(), myAcountGroup));
        return menus;
    }

    @Override
    public MenuConfig config(String menuName) {
        MenuConfig config;
        Map<String, Object> attributes = newHashMap();
        if ("Sample menu".equals(menuName)) {
            attributes.put("type", "simple");
            attributes.put("group", "main");
            config = configForSampleMenu(attributes);
        } else if ("Other".equals(menuName)) {
            attributes.put("type", "products");
            attributes.put("group", "main");
            config = new MenuConfig(menuName, attributes, newHashMap(), newHashMap());
        } else if ("And Another".equals(menuName)) {
            attributes.put("type", "groups");
            attributes.put("group", "main");
            config = new MenuConfig(menuName, attributes, newHashMap(), newHashMap());
        } else {
            attributes.put("type", "simple");
            config = new MenuConfig(menuName, attributes, newHashMap(), newHashMap());
        }
        return config;
    }

    private MenuConfig configForSampleMenu(Map<String, Object> menuAttributes) {
        Map<String, MenuItemConfig> items = newHashMap();
        Map<String, Object> attributes = newHashMap();
        attributes.put("appendDivider", Boolean.TRUE);
        items.put("Page Elements", MenuItemConfig.builder().attributes(attributes).build());
        items.put("Wishlist", MenuItemConfig.builder().attributes(attributes).build());
        return new MenuConfig("Sample menu", menuAttributes, items, newHashMap());
    }

    private Iterable<MenuItem> generateStaticMenuItems() {
        Collection<MenuItem> menuItems = newArrayList();
        menuItems.add(generateMenuItem("/products/", "All products", null));
        menuItems.add(generateMenuItem("/products/url1", "Single product", null));
        menuItems.add(generateMenuItem("/dev/contact.html", "Contact us", null));
        menuItems.add(generateMenuItem("/dev/about.html", "About Us", null));
        menuItems.add(generateMenuItem("/dev/static.html", "Page Elements", null));
        return menuItems;
    }

    private Iterable<MenuItem> generateMyAccountMenuItems() {
        Collection<MenuItem> menuItems = newArrayList();
        menuItems.add(generateMenuItem("/login", "Login", null));
        menuItems.add(generateMenuItem("/dev/signup.html", "Signup", null));
        menuItems.add(generateMenuItem("/dev/cart.html", "My cart", null));
        menuItems.add(generateMenuItem("/dev/profile.html", "Edit profile", null));
        menuItems.add(generateMenuItem("/dev/history.html", "Order history", null));
        menuItems.add(generateMenuItem("/dev/wishlist.html", "Wishlist", null));
        return menuItems;
    }

    private Iterable<MenuItem> generateBrandMenuItems() {
        Collection<MenuItem> menuItems = newArrayList();
        menuItems.add(generateMenuItem("/products", "Prada", "/assets/images/prada.gif"));
        menuItems.add(generateMenuItem("/products", "Cartier", "/assets/images/cartier.gif"));
        menuItems.add(generateMenuItem("/products", "Fendi", "/assets/images/fendi.gif"));
        menuItems.add(generateMenuItem("/products", "Dolce Gabbana", "/assets/images/dolce-gabbana.gif"));
        menuItems.add(generateMenuItem("/products", "Louis Vuitton", "/assets/images/louis-vuitton.gif"));
        menuItems.add(generateMenuItem("/products", "Dansko", "/assets/images/dansko.gif"));
        return menuItems;
    }

    private MenuItem generateMenuItem(String url, String name, String imgUrl) {
        return MenuItem
                .builder()
                .name(name)
                .url(url)
                .imgUrl(imgUrl)
                .build();
    }
}
