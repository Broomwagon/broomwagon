package cc.broomwagon.dao;

import static java.util.Collections.emptyMap;
import static java.util.Optional.of;

import cc.broomwagon.model.page.Segment;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * Dummy dao - returns hardcoded segments.
 */
@Repository
public class DummySegmentDao implements SegmentDao {
    private Collection<Segment> segments;

    public DummySegmentDao() {
        this.segments = new ArrayList<>();
        segments.add(Segment.builder()
                .id(1l)
                .template("segment/slider")
                .fragment("slider")
                .parameters(emptyMap())
                .cssClass("").build());
        segments.add(Segment.builder()
                .id(2l)
                .template("segment/product/product-item")
                .fragment("product")
                .parameters(sampleMap())
                .cssClass("col-xs-12 col-sm-6 col-md-3").build());
        segments.add(Segment.builder()
                .id(3l)
                .template("segment/promo")
                .fragment("promo")
                .parameters(putInMap(new HashMap<>(), "cssClass", "fa fa-cog fa-spin fa-3x"))
                .cssClass("col-md-4 promo").build());
    }

    @Override
    public Iterable<Segment> getSegments() {
        return segments;
    }

    @Override
    public Optional<Segment> getSegmentById(Long id) {
        return segments.stream()
                .filter(segment -> segment.getId().equals(id))
                .findFirst();
    }

    @Override
    public Optional<Segment> update(Segment segment) {
        segments.removeIf(s -> s.getId().equals(segment.getId()));
        segments.add(segment);
        return of(segment);
    }

    private Map<String, Object> sampleMap() {
        Map<String, Object> parameters = new HashMap<>();
        parameters.put("cornerText", "On Sale");
        parameters.put("url", "url1");
        parameters.put("title", "Litespeed T1 2015");
        return parameters;
    }

    private Map<String, Object> putInMap(Map<String, Object> map, String key, String value) {
        map.put(key, value);
        return map;
    }
}
