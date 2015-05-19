package cc.broomwagon.web.interceptor;

import static cc.broomwagon.TestFactory.aMenu;
import static cc.broomwagon.TestFactory.aMenuConfig;
import static cc.broomwagon.web.interceptor.MenuInterceptor.MAIN_MENU;
import static cc.broomwagon.web.interceptor.MenuInterceptor.MAIN_MENU_CONFIG;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.isA;
import static org.mockito.Mockito.verify;

import cc.broomwagon.model.Menu;
import cc.broomwagon.model.MenuConfig;
import cc.broomwagon.service.MenuManager;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.web.servlet.ModelAndView;

@RunWith(MockitoJUnitRunner.class)
public class MenuInterceptorTest {
    @InjectMocks
    private MenuInterceptor menuInterceptor;
    @Mock
    private MenuManager menuManager;

    @Test
    public void shouldCallMenuManagerInPostHandle() throws Exception {
        // given
        ModelAndView modelAndView = new ModelAndView();
        Menu mainMenu = aMenu();
        MenuConfig menuConfig = aMenuConfig();
        given(menuManager.mainMenu()).willReturn(mainMenu);
        given(menuManager.menuConfig(isA(String.class))).willReturn(menuConfig);

        // when
        menuInterceptor.postHandle(null, null, null, modelAndView);

        // then
        verify(menuManager).mainMenu();
        verify(menuManager).menuConfig(isA(String.class));
        assertThat(modelAndView.getModel().get(MAIN_MENU), is(mainMenu));
        assertThat(modelAndView.getModel().get(MAIN_MENU_CONFIG), is(menuConfig));
    }
}