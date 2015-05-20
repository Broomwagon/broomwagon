package cc.broomwagon.web.interceptor;

import static com.google.common.collect.FluentIterable.from;

import cc.broomwagon.model.menu.Menu;
import cc.broomwagon.service.MenuManager;
import cc.broomwagon.web.ui.MenuWrapper;
import com.google.common.base.Function;
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
    public static final String MAIN_MENUS = "mainMenus";

    @Autowired
    private MenuManager menuManager;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        modelAndView.getModel().put(MAIN_MENUS, from(menuManager.mainMenu()).transform(new Function<Menu, MenuWrapper>() {
            @Override
            public MenuWrapper apply(Menu input) {
                return new MenuWrapper(input, menuManager.menuConfig(input.getSelf().getName()));
            }
        }).toList());
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
