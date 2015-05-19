package cc.broomwagon.dao;

import cc.broomwagon.model.Menu;
import cc.broomwagon.model.MenuConfig;

/**
 * Interface to retrieve menu items.
 */
public interface MenuDao {

    Menu mainMenu();

    MenuConfig config(String menuName);
}
