package cc.broomwagon.web.ui;

import lombok.Data;

import java.util.ArrayList;
import java.util.Collection;

@Data
public class PageForm {
    private Long id;
    private String title;
    private String url;
    private Collection<RowForm> rows = new ArrayList<>();
}
