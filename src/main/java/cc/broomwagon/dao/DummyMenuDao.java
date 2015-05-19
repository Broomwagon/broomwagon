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
        items.put("Static Pages", generateMenuItems());
        items.put("My Account", generateMyAccountMenuItems());
        items.put("Brands", generateBrandMenuItems());
        return new Menu(MenuItem.builder()
                .name("All")
                .url("/products/").build(),
                items);
    }

    @Override
    public MenuConfig config(String menuName) {
        Map<String, MenuItemConfig> config = newHashMap();
        config.put("Page Elements", MenuItemConfig.builder().appendDivider(true).build());
        config.put("Wishlist", MenuItemConfig.builder().appendDivider(true).build());
        return new MenuConfig("All", config);
    }

    private Iterable<MenuItem> generateMenuItems() {
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
