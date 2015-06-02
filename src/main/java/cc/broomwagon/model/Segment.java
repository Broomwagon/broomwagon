package cc.broomwagon.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NonNull;
import lombok.ToString;

/**
 * Segment on a page.
 */
@AllArgsConstructor
@Getter
@EqualsAndHashCode
@ToString
@Builder
public class Segment {
    @NonNull
    private Long id;
    @NonNull
    private String template;
    @NonNull
    private String fragment;
}
