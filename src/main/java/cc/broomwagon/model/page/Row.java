package cc.broomwagon.model.page;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NonNull;
import lombok.ToString;

import java.util.Collection;

/**
 * Row on a page.
 */
@AllArgsConstructor
@Getter
@EqualsAndHashCode
@ToString
@Builder
public class Row {
    @NonNull
    private Collection<Column> columns;
}
