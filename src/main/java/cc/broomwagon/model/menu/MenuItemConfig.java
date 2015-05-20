package cc.broomwagon.model.menu;

import lombok.Builder;
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
@Builder
public class MenuItemConfig {
    @NonNull private Map<String, Object> attributes;
}
