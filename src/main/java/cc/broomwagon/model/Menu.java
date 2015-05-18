package cc.broomwagon.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@RequiredArgsConstructor
@Getter
@EqualsAndHashCode
@ToString
public class Menu {
    @NonNull private MenuItem top;
    @NonNull private Iterable<MenuItem> items;
}
