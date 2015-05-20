package cc.broomwagon.model.menu;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

/**
 * Group contains menu items.
 */
@RequiredArgsConstructor
@Getter
@EqualsAndHashCode
@ToString
public class MenuItemGroup {
    @NonNull private String name;
    @NonNull private Iterable<MenuItem> items;
}
