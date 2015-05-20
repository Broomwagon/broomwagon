package cc.broomwagon.web.ui;

import cc.broomwagon.model.menu.Menu;
import cc.broomwagon.model.menu.MenuConfig;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

/**
 * Class to wrap menu and its config.
 */
@RequiredArgsConstructor
@Getter
@EqualsAndHashCode
@ToString
public class MenuWrapper {
    @NonNull private Menu menu;
    @NonNull private MenuConfig config;
}
