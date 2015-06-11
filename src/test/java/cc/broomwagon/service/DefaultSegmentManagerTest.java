package cc.broomwagon.service;

import static cc.broomwagon.TestFactory.*;
import static java.util.Collections.singletonList;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;

import cc.broomwagon.dao.SegmentDao;
import cc.broomwagon.model.page.Segment;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class DefaultSegmentManagerTest {
    @InjectMocks
    private DefaultSegmentManager defaultSegmentManager;
    @Mock
    private SegmentDao segmentDao;

    @Test
    public void shouldGetSegments() {
        // given
        Iterable<Segment> segments = singletonList(aSegment());
        given(segmentDao.getSegments()).willReturn(segments);

        // when
        defaultSegmentManager.getSegments();

        // then
        verify(segmentDao).getSegments();
    }
}