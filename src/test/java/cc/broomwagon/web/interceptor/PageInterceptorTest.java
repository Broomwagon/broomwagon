package cc.broomwagon.web.interceptor;

import static cc.broomwagon.TestFactory.*;
import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.Matchers.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.any;
import static org.mockito.Matchers.isA;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

import cc.broomwagon.model.page.Page;
import cc.broomwagon.service.PageManager;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@RunWith(MockitoJUnitRunner.class)
public class PageInterceptorTest {
    @InjectMocks
    private PageInterceptor pageInterceptor;
    @Mock
    private PageManager pageManager;

    @Test
    public void shouldPopulatePage() throws Exception {
        // given
        ModelAndView modelAndView = new ModelAndView();
        HttpServletRequest request = mock(HttpServletRequest.class);
        Page page = aPage();
        given(request.getRequestURI()).willReturn("/");
        given(pageManager.getPageByUrl(any(String.class))).willReturn(Optional.of(page));

        // when
        pageInterceptor.postHandle(request, null, null, modelAndView);

        // then
        verify(pageManager).getPageByUrl(isA(String.class));
        assertThat(modelAndView.getModel().get(PageInterceptor.PAGE), is(page));
    }
}