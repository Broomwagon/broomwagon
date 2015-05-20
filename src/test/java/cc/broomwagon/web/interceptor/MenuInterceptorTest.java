package cc.broomwagon.web.interceptor;

import static cc.broomwagon.TestFactory.aMenu;
import static cc.broomwagon.TestFactory.aMenuConfig;
import static cc.broomwagon.web.interceptor.MenuInterceptor.MENUS;
import static com.google.common.collect.Lists.newArrayList;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.isA;
import static org.mockito.Mockito.verify;

import cc.broomwagon.model.menu.Menu;
import cc.broomwagon.model.menu.MenuConfig;
import cc.broomwagon.service.MenuManager;
import cc.broomwagon.web.ui.MenuWrapper;
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

    @SuppressWarnings("unchecked")
    @Test
    public void shouldCallMenuManagerInPostHandle() throws Exception {
        // given
        ModelAndView modelAndView = new ModelAndView();
        Iterable<Menu> mainMenus = newArrayList(aMenu("MenuName123"));
        MenuConfig menuConfig = aMenuConfig();
        given(menuManager.menus()).willReturn(mainMenus);
        given(menuManager.menuConfig(isA(String.class))).willReturn(menuConfig);

        // when
        menuInterceptor.postHandle(null, null, null, modelAndView);

        // then
        verify(menuManager).menus();
        assertThat(((Iterable<MenuWrapper>) modelAndView.getModel().get(MENUS))
                .iterator().next().getMenu().getSelf().getName(), is("MenuName123"));
    }
}