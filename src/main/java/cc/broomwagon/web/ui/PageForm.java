package cc.broomwagon.web.ui;

import lombok.Data;

import java.util.ArrayList;

@Data
public class PageForm {
    private Long id;
    private String title;
    private String url;
    private Iterable<RowForm> rows = new ArrayList<>();
}
