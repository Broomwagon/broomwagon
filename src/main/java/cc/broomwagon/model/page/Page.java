package cc.broomwagon.model.page;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NonNull;
import lombok.ToString;

import java.util.Collection;
import java.util.stream.Collectors;

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
    private Collection<Row> rows;

    public Collection<Long> getSegmentIds() {
        return rows.stream()
                .map(Row::getColumns)
                .flatMap(Collection::stream)
                .mapToLong(Column::getSegmentId)
                .distinct()
                .boxed()
                .collect(Collectors.toSet());
    }
}
