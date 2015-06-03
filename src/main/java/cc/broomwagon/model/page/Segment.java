package cc.broomwagon.model.page;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NonNull;
import lombok.ToString;

import java.util.Map;

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
    private String cssClass; // col-xs-12 col-sm-6 col-md-3
    @NonNull
    private String template; // th:include="template :: fragment"
    @NonNull
    private String fragment; // th:include="template :: fragment"
    @NonNull
    private Map<String, Object> parameters;
}
