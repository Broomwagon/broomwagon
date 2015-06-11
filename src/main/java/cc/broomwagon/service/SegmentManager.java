package cc.broomwagon.service;

import cc.broomwagon.model.page.Segment;

/**
 * Interface to retrieve/manipulate segment.
 */
public interface SegmentManager {
    Iterable<Segment> getSegments();
}
