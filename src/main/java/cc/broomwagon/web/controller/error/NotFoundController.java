package cc.broomwagon.web.controller.error;

import cc.broomwagon.web.exception.PageNotFoundException;
import org.springframework.core.annotation.Order;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

/**
 * Controller to handle 404.
 */
@ControllerAdvice
@Order(1)
public class NotFoundController {

    @ExceptionHandler(PageNotFoundException.class)
    public ModelAndView notFound() {
        return new ModelAndView("view/error/not-found");
    }
}
