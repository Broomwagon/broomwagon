package cc.broomwagon.web.ui;

import lombok.Data;

import java.util.HashMap;
import java.util.Map;

@Data
public class SegmentForm {
    private Long id;
    private String template; // th:include="template :: fragment"
    private String fragment; // th:include="template :: fragment"
    private Map<String, Object> parameters = new HashMap<>();
}
