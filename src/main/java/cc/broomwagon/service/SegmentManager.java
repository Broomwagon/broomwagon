package cc.broomwagon.service;

import cc.broomwagon.model.page.Segment;

import java.util.Collection;
import java.util.Optional;

/**
 * Interface to retrieve/manipulate segment.
 */
public interface SegmentManager {
    Collection<Segment> getSegments();

    Optional<Segment> getSegmentById(Long id);

    Optional<Segment> update(Segment segment);

    Optional<Segment> save(Segment segment);
}
