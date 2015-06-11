package cc.broomwagon.service;

import cc.broomwagon.model.page.Segment;

import java.util.Optional;

/**
 * Interface to retrieve/manipulate segment.
 */
public interface SegmentManager {
    Iterable<Segment> getSegments();

    Optional<Segment> getSegmentById(Long id);
}
