package cc.broomwagon.model.page;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NonNull;
import lombok.ToString;

/**
 * Product POJO.
 */
@AllArgsConstructor
@Getter
@EqualsAndHashCode
@ToString
@Builder
public class Page {
    @NonNull
    private Long id;
    @NonNull
    private String title;
    @NonNull
    private String url;
    @NonNull
    private Iterable<Segment> segments;
}
