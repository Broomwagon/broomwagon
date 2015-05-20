package cc.broomwagon.service;

import static org.mockito.Mockito.verify;

import cc.broomwagon.dao.MenuDao;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class DefaultMenuManagerTest {
    @InjectMocks
    private DefaultMenuManager defaultMenuManager;
    @Mock
    private MenuDao menuDao;

    @Test
    public void shouldGetMainMenu() {
        // when
        defaultMenuManager.menus();

        // then
        verify(menuDao).menus();
    }

    @Test
    public void shouldGetConfig() {
        // when
        defaultMenuManager.menuConfig("name");

        // then
        verify(menuDao).config("name");
    }
}