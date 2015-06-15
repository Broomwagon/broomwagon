package cc.broomwagon.web.ui;

import lombok.Data;

@Data
public class ColumnForm {
    private String cssClass; // col-xs-12 col-sm-6 col-md-3
    private Long segmentId;
}
