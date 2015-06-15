package cc.broomwagon.web.interceptor;

import cc.broomwagon.model.page.Segment;
import cc.broomwagon.service.SegmentManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * Interceptor to populate menus
 */
@Component
public class SegmentInterceptor implements HandlerInterceptor {
    public static final String SEGMENTS = "segments";
    @Autowired
    private SegmentManager segmentManager;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        if (modelAndView != null) {
            Map<Long, Segment> segmentMap = StreamSupport.stream(segmentManager.getSegments().spliterator(), false)
                    .collect(Collectors.toMap(Segment::getId, Function.identity()));
            modelAndView.getModel().put(SEGMENTS, segmentMap);
        }
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
