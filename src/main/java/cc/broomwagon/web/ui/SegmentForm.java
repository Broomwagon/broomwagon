package cc.broomwagon.web.ui;

import lombok.Data;

import java.util.HashMap;
import java.util.Map;

@Data
public class SegmentForm {
    private Long id;
    private String cssClass; // col-xs-12 col-sm-6 col-md-3
    private String template; // th:include="template :: fragment"
    private String fragment; // th:include="template :: fragment"
    private Map<String, Object> parameters = new HashMap<>();
}
