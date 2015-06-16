package cc.broomwagon.web.interceptor;

import static java.util.function.Function.identity;
import static java.util.stream.Collectors.toMap;
import static java.util.stream.StreamSupport.stream;

import cc.broomwagon.model.page.Segment;
import cc.broomwagon.service.SegmentManager;
import cc.broomwagon.web.translator.segment.SegmentParameterFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

/**
 * Interceptor to populate menus
 */
@Component
public class SegmentInterceptor implements HandlerInterceptor {
    public static final String SEGMENTS = "segments";
    @Autowired
    private SegmentManager segmentManager;
    @Autowired
    private SegmentParameterFactory segmentParameterFactory;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        if (modelAndView != null) {
            Map<Long, Segment> segmentMap = stream(segmentManager.getSegments().spliterator(), false)
                    .peek(segment -> segmentParameterFactory.translate(segment.getParameters()))
                    .collect(toMap(Segment::getId, identity()));
            modelAndView.getModel().put(SEGMENTS, segmentMap);
        }
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
