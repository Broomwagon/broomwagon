package cc.broomwagon.service;

import cc.broomwagon.model.menu.Menu;
import cc.broomwagon.model.menu.MenuConfig;

import java.util.Collection;

/**
 * Interface to retrieve/manipulate menu and it's items.
 */
public interface MenuManager {

    Collection<Menu> menus();

    MenuConfig menuConfig(String name);
}
