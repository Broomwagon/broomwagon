package cc.broomwagon.dao;

import static com.google.common.collect.Iterables.size;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;

import cc.broomwagon.model.menu.Menu;
import cc.broomwagon.model.menu.MenuConfig;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.runners.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class DummyMenuDaoTest {
    @InjectMocks
    private DummyMenuDao dummyMenuDao;

    @Test
    public void shouldReturnMainMenu() {
        // when
        Iterable<Menu> actual = dummyMenuDao.mainMenu();

        // then
        assertThat(actual, is(notNullValue()));
        assertThat(size(actual), equalTo(3));
    }

    @Test
    public void shouldReturnMenuConfig() {
        // when
        MenuConfig actual = dummyMenuDao.config("Sample menu");

        // then
        assertThat(actual, is(notNullValue()));
        assertThat(actual.getItems().get("Page Elements"), is(notNullValue()));
    }
}