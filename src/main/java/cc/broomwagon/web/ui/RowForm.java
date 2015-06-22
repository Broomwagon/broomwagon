package cc.broomwagon.web.ui;

import lombok.Data;

import java.util.ArrayList;
import java.util.Collection;

@Data
public class RowForm {
    private Collection<ColumnForm> columns = new ArrayList<>();
}
