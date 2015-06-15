package cc.broomwagon.web.ui;

import lombok.Data;

import java.util.ArrayList;

@Data
public class RowForm {
    private Iterable<ColumnForm> columns = new ArrayList<>();
}
