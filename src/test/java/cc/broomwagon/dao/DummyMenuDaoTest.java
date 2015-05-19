package cc.broomwagon.dao;

import static com.google.common.collect.Iterables.size;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;

import cc.broomwagon.model.Menu;
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
        Menu actual = dummyMenuDao.mainMenu();

        // then
        assertThat(actual, is(notNullValue()));
        assertThat(size(actual.getItems()), equalTo(11));
    }
}