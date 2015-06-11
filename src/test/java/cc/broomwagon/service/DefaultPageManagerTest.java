package cc.broomwagon.service;

import static cc.broomwagon.TestFactory.*;
import static java.util.Collections.emptyList;
import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.isA;
import static org.mockito.Mockito.verify;

import cc.broomwagon.dao.PageDao;
import cc.broomwagon.model.page.Page;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.Optional;

@RunWith(MockitoJUnitRunner.class)
public class DefaultPageManagerTest {
    @InjectMocks
    private DefaultPageManager defaultPageManager;
    @Mock
    private PageDao pageDao;

    @Test
    public void shouldGetPages() {
        // given
        given(pageDao.getPages()).willReturn(emptyList());

        // when
        defaultPageManager.getPages();

        // then
        verify(pageDao).getPages();
    }

    @Test
    public void shouldGetPageByUrl() {
        // given
        given(pageDao.getPageByUrl(isA(String.class))).willReturn(Optional.<Page>empty());

        // when
        defaultPageManager.getPageByUrl("someurl");

        // then
        verify(pageDao).getPageByUrl("someurl");
    }

    @Test
    public void shouldGetPageById() {
        // given
        given(pageDao.getPageById(isA(Long.class))).willReturn(Optional.<Page>empty());

        // when
        defaultPageManager.getPageById(1l);

        // then
        verify(pageDao).getPageById(1L);
    }

    @Test
    public void shouldUpdatePage() {
        // given
        Page page = aPage();

        // when
        Optional<Page> actual = defaultPageManager.update(page);

        //then
        verify(pageDao).update(page);
    }

    @Test
    public void shouldSavePage() {
        // given
        Page page = aPage();

        // when
        Optional<Page> actual = defaultPageManager.save(page);

        //then
        verify(pageDao).save(page);
    }
}