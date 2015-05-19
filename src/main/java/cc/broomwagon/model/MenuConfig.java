package cc.broomwagon.model;

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
    @NonNull private String name;
    @NonNull private Map<String, MenuItemConfig> config;
}
