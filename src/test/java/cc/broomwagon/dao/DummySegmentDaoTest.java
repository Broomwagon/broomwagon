package cc.broomwagon.dao;

import static com.google.common.collect.Iterables.size;
import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.Matchers.*;

import cc.broomwagon.model.page.Segment;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.HashMap;
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

    @Test
    public void shouldUpdate() {
        // given
        Segment segment = Segment.builder()
                .id(1L)
                .cssClass("css1")
                .fragment("fragment")
                .template("template")
                .parameters(new HashMap<>()).build();

        // when
        Optional<Segment> actual = dummySegmentDao.update(segment);

        // then
        assertThat(actual.get().getCssClass(), is("css1"));
        assertThat(size(dummySegmentDao.getSegments()), is(3));
    }
}