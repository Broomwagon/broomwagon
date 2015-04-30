package cc.broomwagon.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Controller to display checkout.
 */
@Controller
public class CheckoutController {

    @RequestMapping(value = "/checkout", method = RequestMethod.GET)
    public String show() {
        return "view/checkout";
    }

    @RequestMapping(value = "/checkout", method = RequestMethod.POST)
    public String process() {
        return "view/checkout-thanks";
    }
}
