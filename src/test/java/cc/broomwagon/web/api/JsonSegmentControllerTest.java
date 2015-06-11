package cc.broomwagon.web.api;

import static cc.broomwagon.TestFactory.*;
import static com.google.common.collect.Iterables.size;
import static java.util.Collections.singletonList;
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

@RunWith(MockitoJUnitRunner.class)
public class JsonSegmentControllerTest {
    @InjectMocks
    private JsonSegmentController jsonSegmentController;
    @Mock
    private SegmentManager segmentManager;

    @Test
    public void shouldFind() {
        // given
        given(segmentManager.getSegments()).willReturn(singletonList(aSegment()));

        // when
        Iterable<Segment> actual = jsonSegmentController.find();

        // then
        verify(segmentManager).getSegments();
        assertThat(size(actual), is(1));
    }
}