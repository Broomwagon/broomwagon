package cc.broomwagon.web.api;

import cc.broomwagon.model.page.Segment;
import cc.broomwagon.service.SegmentManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/segments")
public class JsonSegmentController {
    @Autowired
    private SegmentManager segmentManager;

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Segment> find() {
        return segmentManager.getSegments();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Segment get(@PathVariable("id") Long id) {
        return null;
    }

    @RequestMapping(method = RequestMethod.POST)
    public Segment save(@RequestBody Object segmentForm) {
        return null;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Segment update(@RequestBody Object segmentForm, @PathVariable Long id) {
        return null;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        System.out.println("Deleting: " + id);
    }
}
