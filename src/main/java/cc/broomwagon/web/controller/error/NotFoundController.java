package cc.broomwagon.web.controller.error;

import cc.broomwagon.web.exception.PageNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Controller to handle 404.
 */
@Controller
@ControllerAdvice
public class NotFoundController {

    @RequestMapping("/404")
    @ExceptionHandler(PageNotFoundException.class)
    public ModelAndView notFound() {
        return new ModelAndView("view/error/not-found");
    }
}
