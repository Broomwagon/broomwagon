package cc.broomwagon.service;

import cc.broomwagon.dao.MenuDao;
import cc.broomwagon.model.Menu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DefaultMenuManager implements MenuManager {
    @Autowired
    private MenuDao menuDao;

    @Override
    public Menu mainMenu() {
        return menuDao.mainMenu();
    }
}
