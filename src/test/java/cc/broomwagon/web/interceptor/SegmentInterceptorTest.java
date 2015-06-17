package cc.broomwagon.web.interceptor;

import static cc.broomwagon.TestFactory.aSegment;
import static cc.broomwagon.TestFactory.aSegmentWithId;
import static cc.broomwagon.web.interceptor.SegmentInterceptor.SEGMENTS;
import static cc.broomwagon.web.interceptor.SegmentInterceptor.SEGMENTS_PARAMETERS;
import static java.util.Arrays.asList;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.isA;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import cc.broomwagon.model.page.Segment;
import cc.broomwagon.service.SegmentManager;
import cc.broomwagon.web.translator.segment.SegmentParameterFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;
import java.util.Objects;

@RunWith(MockitoJUnitRunner.class)
public class SegmentInterceptorTest {
    @InjectMocks
    private SegmentInterceptor segmentInterceptor;
    @Mock
    private SegmentManager segmentManager;
    @Mock
    private SegmentParameterFactory segmentParameterFactory;

    @SuppressWarnings("unchecked")
    @Test
    public void shouldAddSegments() throws Exception {
        // given
        given(segmentManager.getSegments()).willReturn(asList(aSegmentWithId(99L), aSegment()));
        ModelAndView modelAndView = new ModelAndView();

        // when
        segmentInterceptor.postHandle(null, null, null, modelAndView);

        // then
        verify(segmentManager, times(2)).getSegments();
        verify(segmentParameterFactory, times(2)).translate(isA(Map.class));
        assertThat(((Map<Long, Segment>) modelAndView.getModel().get(SEGMENTS)).get(99L), is(notNullValue()));
        assertThat(((Map<Long, Map<String, Objects>>) modelAndView.getModel().get(SEGMENTS_PARAMETERS)).get(99L), is(notNullValue()));
    }
}