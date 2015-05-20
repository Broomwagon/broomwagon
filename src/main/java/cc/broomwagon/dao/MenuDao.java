package cc.broomwagon.dao;

import cc.broomwagon.model.menu.Menu;
import cc.broomwagon.model.menu.MenuConfig;

/**
 * Interface to retrieve menu items.
 */
public interface MenuDao {

    Iterable<Menu> mainMenu();

    MenuConfig config(String menuName);
}
