package cc.broomwagon.service;

import static org.mockito.Mockito.verify;

import cc.broomwagon.dao.MenuDao;
import cc.broomwagon.model.Menu;
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
        Menu actual = defaultMenuManager.mainMenu();

        // then
        verify(menuDao).mainMenu();
    }
}