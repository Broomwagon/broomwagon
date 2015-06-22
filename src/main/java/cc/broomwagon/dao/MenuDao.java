package cc.broomwagon.dao;

import cc.broomwagon.model.menu.Menu;
import cc.broomwagon.model.menu.MenuConfig;

import java.util.Collection;

/**
 * Interface to retrieve menu items.
 */
public interface MenuDao {

    Collection<Menu> menus();

    MenuConfig config(String menuName);
}
