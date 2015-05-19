package cc.broomwagon.service;

import cc.broomwagon.model.Menu;
import cc.broomwagon.model.MenuConfig;

/**
 * Interface to retrieve/manipulate menu and it's items.
 */
public interface MenuManager {

    Menu mainMenu();

    MenuConfig menuConfig(String name);
}
