package cc.broomwagon.web.controller.json;

import cc.broomwagon.model.Product;
import cc.broomwagon.service.ProductManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Collection;

@Controller
@RequestMapping("/json/${web.mapping.products}")
public class JsonProductController {
    @Autowired
    private ProductManager productManager;

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public Iterable<Product> products() {
        return productManager.getProducts();
    }
}
