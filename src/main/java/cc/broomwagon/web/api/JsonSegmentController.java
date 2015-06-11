package cc.broomwagon.web.api;

import cc.broomwagon.model.page.Segment;
import cc.broomwagon.service.SegmentManager;
import cc.broomwagon.web.exception.ItemNotFoundException;
import cc.broomwagon.web.translator.PageTranslator;
import cc.broomwagon.web.ui.SegmentForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/segments")
public class JsonSegmentController {
    @Autowired
    private SegmentManager segmentManager;
    @Autowired
    private PageTranslator pageTranslator;

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Segment> find() {
        return segmentManager.getSegments();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Segment get(@PathVariable("id") Long id) {
        Optional<Segment> segment = segmentManager.getSegmentById(id);
        if (!segment.isPresent()) {
            throw new ItemNotFoundException();
        }
        return segment.get();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Segment save(@RequestBody SegmentForm segmentForm) {
        return null;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Segment update(@RequestBody SegmentForm segmentForm, @PathVariable Long id) {
        Optional<Segment> segment = segmentManager.update(pageTranslator.translate(segmentForm));
        if (!segment.isPresent()) {
            throw new ItemNotFoundException();
        }
        return segment.get();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        System.out.println("Deleting: " + id);
    }
}
