package cc.broomwagon.dao;

import static com.google.common.collect.Iterables.size;
import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.Matchers.*;

import cc.broomwagon.model.page.Segment;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.Optional;

@RunWith(MockitoJUnitRunner.class)
public class DummySegmentDaoTest {
    @InjectMocks
    private DummySegmentDao dummySegmentDao;

    @Test
    public void shouldGetSegmentById() {

        // when
        Optional<Segment> actual = dummySegmentDao.getSegmentById(1l);

        // then
        assertThat(actual.isPresent(), is(true));
    }

    @Test
    public void shouldGetSegments() {

        // when
        Iterable<Segment> actual = dummySegmentDao.getSegments();

        // then
        assertThat(size(actual), is(3));
    }
}