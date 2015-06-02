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
public class MenuConfig {
    @NonNull
    private String name;
    @NonNull
    private Map<String, Object> menuAttributes;

    @NonNull
    private Map<String, MenuItemConfig> items;
    @NonNull
    private Map<String, MenuItemConfig> groups;
}
