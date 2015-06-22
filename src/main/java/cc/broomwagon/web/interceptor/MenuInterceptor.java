package cc.broomwagon.web.interceptor;

import static java.util.stream.Collectors.toList;

import cc.broomwagon.service.MenuManager;
import cc.broomwagon.web.ui.MenuWrapper;
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
    public static final String MENUS = "menus";

    @Autowired
    private MenuManager menuManager;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        if (modelAndView != null) {
            modelAndView.getModel().put(MENUS, menuManager.menus().stream()
                    .map(input -> new MenuWrapper(input, menuManager.menuConfig(input.getSelf().getName())))
                    .collect(toList()));
        }
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
