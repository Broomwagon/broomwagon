package cc.broomwagon.web.interceptor;

import cc.broomwagon.model.page.Page;
import cc.broomwagon.service.PageManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Optional;

/**
 * Interceptor to populate menus
 */
@Component
public class PageInterceptor implements HandlerInterceptor {
    public static final String PAGE = "page";
    @Autowired
    private PageManager pageManager;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        if (modelAndView != null) {
            Optional<Page> page = pageManager.getPageByUrl(request.getRequestURI());
            if (page.isPresent()) {
                modelAndView.getModel().put(PAGE, page.get());
            }
        }
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
