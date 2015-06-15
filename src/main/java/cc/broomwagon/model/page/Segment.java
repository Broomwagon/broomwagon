package cc.broomwagon.model.page;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NonNull;
import lombok.ToString;

import java.util.Map;

/**
 * Segment in the system. It can be reused through the site.
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
    private String template; // th:include="TEMPLATE :: fragment"
    @NonNull
    private String fragment; // th:include="template :: FRAGMENT"
    @NonNull
    private Map<String, Object> parameters;
}
