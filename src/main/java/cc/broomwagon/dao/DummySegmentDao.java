package cc.broomwagon.dao;

import static java.util.Collections.emptyMap;
import static java.util.Optional.of;
import static org.springframework.util.ReflectionUtils.findField;
import static org.springframework.util.ReflectionUtils.setField;

import cc.broomwagon.model.page.Segment;
import org.springframework.stereotype.Repository;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.LongSummaryStatistics;
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
                .parameters(emptyMap()).build());
        segments.add(Segment.builder()
                .id(2l)
                .template("segment/product/product-item")
                .fragment("product")
                .parameters(sampleProduct()).build());
        segments.add(Segment.builder()
                .id(3l)
                .template("segment/promo")
                .fragment("promo")
                .parameters(putInMap(new HashMap<>(), "cssClass", "fa fa-cog fa-spin fa-3x")).build());
        segments.add(Segment.builder()
                .id(4l)
                .template("segment/product/product-details")
                .fragment("product")
                .parameters(sampleProduct()).build());
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

    @Override
    public Optional<Segment> save(Segment segment) {
        LongSummaryStatistics stats = segments.stream()
                .mapToLong(Segment::getId)
                .summaryStatistics();

        segments.add(segment);
        return of(setId(segment, stats.getMax() + 1));
    }

    /**
     * This is a hack to duplicate db logic. Generating next id.
     *
     * @param segment - segment to set id
     * @param id      - id for the segment
     * @return - segment with id set
     */
    private Segment setId(Segment segment, Long id) {
        Field idField = findField(Segment.class, "id");
        idField.setAccessible(true);
        setField(idField, segment, id);
        idField.setAccessible(false);
        return segment;
    }

    private Map<String, Object> sampleProduct() {
        Map<String, Object> parameters = new HashMap<>();
        parameters.put("cornerText", "On Sale");
        parameters.put("_product", "random");
        return parameters;
    }

    private Map<String, Object> putInMap(Map<String, Object> map, String key, String value) {
        map.put(key, value);
        return map;
    }
}
