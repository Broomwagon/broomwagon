package cc.broomwagon.service;

import cc.broomwagon.model.Menu;
import org.springframework.stereotype.Service;

@Service
public class DefaultMenuManager implements MenuManager {
    @Override
    public Menu mainMenu() {
        return null;
    }
}
