package cc.broomwagon.web.api;

import static cc.broomwagon.TestFactory.*;
import static com.google.common.collect.Iterables.size;
import static java.util.Collections.singletonList;
import static java.util.Optional.empty;
import static java.util.Optional.of;
import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.Matchers.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.verify;

import cc.broomwagon.model.page.Page;
import cc.broomwagon.service.PageManager;
import cc.broomwagon.web.exception.ItemNotFoundException;
import cc.broomwagon.web.translator.PageTranslator;
import cc.broomwagon.web.ui.PageForm;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.Optional;

@RunWith(MockitoJUnitRunner.class)
public class JsonPageControllerTest {
    @InjectMocks
    private JsonPageController jsonPageController;
    @Mock
    private PageManager pageManager;
    @Mock
    private PageTranslator pageTranslator;

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

    @Test
    public void shouldUpdatePage() {
        // given
        PageForm pageFrom = new PageForm();
        Page page = aPage();
        given(pageTranslator.translate(pageFrom)).willReturn(page);
        given(pageManager.update(page)).willReturn(Optional.of(page));

        // when
        Page actual = jsonPageController.update(pageFrom, 1L);

        // then
        assertThat(actual, is(notNullValue()));
        verify(pageTranslator).translate(pageFrom);
        verify(pageManager).update(page);
    }

    @Test(expected = ItemNotFoundException.class)
    public void shouldNotUpdatePage() {
        // given
        PageForm pageFrom = new PageForm();
        Page page = aPage();
        given(pageTranslator.translate(pageFrom)).willReturn(page);
        given(pageManager.update(page)).willReturn(Optional.empty());

        // when
        jsonPageController.update(pageFrom, 1L);

        // then
        // exception
    }

    @Test
    public void shouldSavePage() {
        // given
        PageForm pageFrom = new PageForm();
        Page page = aPage();
        given(pageTranslator.translate(pageFrom)).willReturn(page);
        given(pageManager.save(page)).willReturn(Optional.of(page));

        // when
        Page actual = jsonPageController.save(pageFrom);

        // then
        assertThat(actual, is(notNullValue()));
        verify(pageTranslator).translate(pageFrom);
        verify(pageManager).save(page);
    }

    @Test(expected = ItemNotFoundException.class)
    public void shouldNotSavePage() {
        // given
        PageForm pageFrom = new PageForm();
        Page page = aPage();
        given(pageTranslator.translate(pageFrom)).willReturn(page);
        given(pageManager.save(page)).willReturn(Optional.empty());

        // when
        Page actual = jsonPageController.save(pageFrom);

        // then
        // exception
    }
}