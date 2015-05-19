package cc.broomwagon.web.interceptor;

import cc.broomwagon.model.menu.Menu;
import cc.broomwagon.service.MenuManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Interceptor to populate menus
 */
@Component
public class MenuInterceptor implements HandlerInterceptor {
    public static final String MAIN_MENU = "mainMenu";
    public static final String MAIN_MENU_CONFIG = "mainMenuConfig";

    @Autowired
    private MenuManager menuManager;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        Menu mainMenu = menuManager.mainMenu();
        modelAndView.getModel().put(MAIN_MENU, mainMenu);
        modelAndView.getModel().put(MAIN_MENU_CONFIG, menuManager.menuConfig(mainMenu.getSelf().getName()));
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
