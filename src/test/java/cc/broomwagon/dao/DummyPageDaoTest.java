package cc.broomwagon.dao;

import static com.google.common.collect.Iterables.size;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

import cc.broomwagon.model.Page;
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
        Optional<Page> actual = pageDao.getPageByUrl("/products/1");

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
}