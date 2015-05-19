package cc.broomwagon.model.menu;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@RequiredArgsConstructor
@Getter
@EqualsAndHashCode
@ToString
@Builder
public class MenuItemConfig {
    @NonNull private Boolean appendDivider;
}
