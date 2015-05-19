package cc.broomwagon.model.menu;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import java.util.Map;

@RequiredArgsConstructor
@Getter
@EqualsAndHashCode
@ToString
public class Menu {
    @NonNull private MenuItem self;
    @NonNull private Map<String, Iterable<MenuItem>> items;
}
