package cc.broomwagon.model.menu;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NonNull;
import lombok.ToString;

@AllArgsConstructor
@Getter
@EqualsAndHashCode
@ToString
@Builder
public class MenuItem {
    @NonNull private String name;
    @NonNull private String url;
    private String imgUrl;
}
