package cc.broomwagon.web.interceptor;

import static cc.broomwagon.TestFactory.aMenu;
import static cc.broomwagon.web.interceptor.MenuInterceptor.MAIN_MENU;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;

import cc.broomwagon.model.Menu;
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
        given(menuManager.mainMenu()).willReturn(mainMenu);

        // when
        menuInterceptor.postHandle(null, null, null, modelAndView);

        // then
        verify(menuManager).mainMenu();
        assertThat(modelAndView.getModel().get(MAIN_MENU), is(mainMenu));
    }
}