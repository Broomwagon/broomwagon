package cc.broomwagon.web.api;

import cc.broomwagon.model.page.Page;
import cc.broomwagon.service.PageManager;
import cc.broomwagon.web.exception.ItemNotFoundException;
import cc.broomwagon.web.translator.PageTranslator;
import cc.broomwagon.web.ui.PageForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/pages")
public class JsonPageController {
    @Autowired
    private PageManager pageManager;
    @Autowired
    private PageTranslator pageTranslator;

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Page> find() {
        return pageManager.getPages();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Page get(@PathVariable("id") Long id) {
        Optional<Page> page = pageManager.getPageById(id);
        if (!page.isPresent()) {
            throw new ItemNotFoundException();
        }
        return page.get();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Page save(@RequestBody PageForm pageForm) {
        Optional<Page> page = pageManager.save(pageTranslator.translate(pageForm));
        if (!page.isPresent()) {
            throw new ItemNotFoundException();
        }
        return page.get();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Page update(@RequestBody PageForm pageForm, @PathVariable Long id) {
        Optional<Page> page = pageManager.update(pageTranslator.translate(pageForm));
        if (!page.isPresent()) {
            throw new ItemNotFoundException();
        }
        return page.get();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        System.out.println("Deleting: " + id);
    }
}
