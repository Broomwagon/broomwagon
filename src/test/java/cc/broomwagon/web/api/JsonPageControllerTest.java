package cc.broomwagon.web.api;

import static cc.broomwagon.TestFactory.aPage;
import static com.google.common.collect.Iterables.size;
import static java.util.Collections.singletonList;
import static java.util.Optional.empty;
import static java.util.Optional.of;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.any;

import cc.broomwagon.model.Page;
import cc.broomwagon.service.PageManager;
import cc.broomwagon.web.exception.ItemNotFoundException;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class JsonPageControllerTest {
    @InjectMocks
    private JsonPageController jsonPageController;
    @Mock
    private PageManager pageManager;

    @Test
    public void shouldFind() {
        // given
        given(pageManager.getPages()).willReturn(singletonList(aPage()));

        // when
        Iterable<Page> actual = jsonPageController.find();

        // then
        assertThat(size(actual), is(1));
    }

    @Test
    public void shouldGetPage() {
        // given
        given(pageManager.getPageById(1l)).willReturn(of(aPage()));

        // when
        Page actual = jsonPageController.get(1l);

        // then
        assertThat(actual, is(notNullValue()));
    }

    @Test(expected = ItemNotFoundException.class)
    public void shouldThrowExceptionIfNoProduct() {
        // given
        given(pageManager.getPageById(any(Long.class))).willReturn(empty());

        // when
        jsonPageController.get(2l);

        // then
        // exception
    }
}