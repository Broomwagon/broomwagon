package cc.broomwagon.model.menu;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NonNull;
import lombok.ToString;

@AllArgsConstructor
@Getter
@EqualsAndHashCode
@ToString
public class Menu {
    @NonNull private MenuItem self;
    @NonNull private Iterable<MenuItemGroup> groups;
}
