package cc.broomwagon.model.page;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NonNull;
import lombok.ToString;

/**
 * Column on a page. Wrapping a segment
 */
@AllArgsConstructor
@Getter
@EqualsAndHashCode
@ToString
@Builder
public class Column {
    @NonNull
    private String cssClass; // col-xs-12 col-sm-6 col-md-3
    @NonNull
    private Long segmentId;
}
