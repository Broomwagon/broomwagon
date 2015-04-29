package cc.broomwagon.model;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

/**
 * Product POJO.
 */
@RequiredArgsConstructor
@Getter
@EqualsAndHashCode
@ToString
@Builder
public class Product {
    @NonNull
    private String title;
    @NonNull
    private String url;
}
