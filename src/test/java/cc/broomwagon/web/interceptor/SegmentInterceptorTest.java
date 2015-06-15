package cc.broomwagon.web.interceptor;

import static cc.broomwagon.TestFactory.*;
import static cc.broomwagon.web.interceptor.SegmentInterceptor.SEGMENTS;
import static java.util.Arrays.asList;
import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.Matchers.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;

import cc.broomwagon.model.page.Segment;
import cc.broomwagon.service.SegmentManager;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;

@RunWith(MockitoJUnitRunner.class)
public class SegmentInterceptorTest {
    @InjectMocks
    private SegmentInterceptor segmentInterceptor;
    @Mock
    private SegmentManager segmentManager;

    @SuppressWarnings("unchecked")
    @Test
    public void shouldAddSegments() throws Exception {
        // given
        given(segmentManager.getSegments()).willReturn(asList(aSegmentWithId(99L), aSegment()));
        ModelAndView modelAndView = new ModelAndView();

        // when
        segmentInterceptor.postHandle(null, null, null, modelAndView);

        // then
        verify(segmentManager).getSegments();
        assertThat(((Map<Long, Segment>) modelAndView.getModel().get(SEGMENTS)).get(99L), is(notNullValue()));
    }


}