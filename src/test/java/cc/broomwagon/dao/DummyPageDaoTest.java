package cc.broomwagon.dao;

import static com.google.common.collect.Iterables.size;
import static java.util.Collections.emptyList;
import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.Matchers.*;

import cc.broomwagon.model.page.Page;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.Optional;

@RunWith(MockitoJUnitRunner.class)
public class DummyPageDaoTest {
    @InjectMocks
    private DummyPageDao pageDao;

    @Test
    public void shouldGetPages() {

        // when
        Iterable<Page> actual = pageDao.getPages();

        // then
        assertThat(size(actual), is(3));
    }

    @Test
    public void shouldGetPageByUrl() {

        // when
        Optional<Page> actual = pageDao.getPageByUrl("/products/url");

        // then
        assertThat(actual.isPresent(), is(true));
    }

    @Test
    public void shouldNotGetPageByUrl() {

        // when
        Optional<Page> actual = pageDao.getPageByUrl("/something");

        // then
        assertThat(actual.isPresent(), is(false));
    }

    @Test
    public void shouldGetPageById() {

        // when
        Optional<Page> actual = pageDao.getPageById(1L);

        // then
        assertThat(actual.isPresent(), is(true));
    }

    @Test
    public void shouldUpdate() {
        // given
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