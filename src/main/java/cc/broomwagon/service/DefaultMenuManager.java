package cc.broomwagon.service;

import cc.broomwagon.dao.MenuDao;
import cc.broomwagon.model.menu.Menu;
import cc.broomwagon.model.menu.MenuConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DefaultMenuManager implements MenuManager {
    @Autowired
    private MenuDao menuDao;

    @Override
    public Iterable<Menu> menus() {
        return menuDao.menus();
    }

    @Override
    public MenuConfig menuConfig(String name) {
        return menuDao.config(name);
    }
}
