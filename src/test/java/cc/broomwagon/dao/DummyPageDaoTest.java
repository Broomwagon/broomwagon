package cc.broomwagon.dao;

import static cc.broomwagon.TestFactory.*;
import static com.google.common.collect.Iterables.size;
import static java.util.Collections.emptyList;
import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.Matchers.*;
import static org.mockito.BDDMockito.given;

import cc.broomwagon.model.page.Page;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Matchers;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.Optional;

@RunWith(MockitoJUnitRunner.class)
public class DummyPageDaoTest {
    @InjectMocks
    private DummyPageDao pageDao;
    @Mock
    private SegmentDao segmentDao;

    @Test
    public void shouldGetPages() {
        // given
        given(segmentDao.getSegmentById(Matchers.any(Long.class))).willReturn(Optional.of(aSegment()));

        // when
        Iterable<Page> actual = pageDao.getPages();

        // then
        assertThat(size(actual), is(3));
    }

    @Test
    public void shouldGetPageByUrl() {
        // given
        given(segmentDao.getSegmentById(Matchers.any(Long.class))).willReturn(Optional.of(aSegment()));

        // when
        Optional<Page> actual = pageDao.getPageByUrl("/products/url");

        // then
        assertThat(actual.isPresent(), is(true));
    }

    @Test
    public void shouldNotGetPageByUrl() {
        // given
        given(segmentDao.getSegmentById(Matchers.any(Long.class))).willReturn(Optional.of(aSegment()));

        // when
        Optional<Page> actual = pageDao.getPageByUrl("/something");

        // then
        assertThat(actual.isPresent(), is(false));
    }

    @Test
    public void shouldGetPageById() {
        // given
        given(segmentDao.getSegmentById(Matchers.any(Long.class))).willReturn(Optional.of(aSegment()));

        // when
        Optional<Page> actual = pageDao.getPageById(1L);

        // then
        assertThat(actual.isPresent(), is(true));
    }

    @Test
    public void shouldUpdate() {
        // given
        given(segmentDao.getSegmentById(Matchers.any(Long.class))).willReturn(Optional.of(aSegment()));
        Page page = Page.builder()
                .id(1L)
                .title("Replaced")
                .url("/products")
                .rows(emptyList()).build();

        // when
        Optional<Page> actual = pageDao.update(page);

        // then
        assertThat(actual.get().getTitle(), is("Replaced"));
        assertThat(size(pageDao.getPages()), is(3));
    }

    @Test
    public void shouldSave() {
        // given
        given(segmentDao.getSegmentById(Matchers.any(Long.class))).willReturn(Optional.of(aSegment()));
        Page page = Page.builder()
                .id(99L)
                .title("New Page")
                .url("/products")
                .rows(emptyList()).build();

        // when
        Optional<Page> actual = pageDao.save(page);

        // then
        assertThat(actual.get().getTitle(), is("New Page"));
        assertThat(size(pageDao.getPages()), is(4));
        assertThat(actual.get().getId(), is(not(99L)));
    }
}