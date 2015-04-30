package cc.broomwagon.web.controller.error;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

/**
 * Controller to handle errors.
 */
@ControllerAdvice
@Order(Ordered.LOWEST_PRECEDENCE)
public class ErrorController {

    @ExceptionHandler(Exception.class)
    public ModelAndView defaultErrorHandler(HttpServletRequest request, Exception e) {
        ModelAndView mav = new ModelAndView("view/error/error");
        mav.addObject("datetime", new Date());
        mav.addObject("exception", e);
        mav.addObject("url", request.getRequestURL());
        return mav;
    }
}
