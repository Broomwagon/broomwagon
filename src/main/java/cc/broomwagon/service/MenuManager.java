package cc.broomwagon.service;

import cc.broomwagon.model.menu.Menu;
import cc.broomwagon.model.menu.MenuConfig;

/**
 * Interface to retrieve/manipulate menu and it's items.
 */
public interface MenuManager {

    Iterable<Menu> mainMenu();

    MenuConfig menuConfig(String name);
}
