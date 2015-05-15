package cc.broomwagon.dao;

import static com.google.common.collect.Lists.newArrayList;

import cc.broomwagon.model.Menu;
import cc.broomwagon.model.MenuItem;

import java.util.Collection;

/**
 * Dummy dao - returns hardcoded menu items.
 */
public class DummyMenuDao implements MenuDao {

    @Override
    public Menu mainMenu() {
        return new Menu(generateMenuItems(5));
    }

    private Iterable<MenuItem> generateMenuItems(int numberOfItemsToGenerate) {
        Collection<MenuItem> menuItems = newArrayList();
        for (int i = 0; i < numberOfItemsToGenerate; i++) {
            menuItems.add(generateMenuItem());
        }
        return menuItems;
    }

    private MenuItem generateMenuItem() {
        return MenuItem.builder().build();
    }
}
