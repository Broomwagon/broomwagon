package cc.broomwagon.web.controller.error;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.mock;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@RunWith(MockitoJUnitRunner.class)
public class ErrorControllerTest {
    @InjectMocks
    private ErrorController errorController;

    @Test
    public void shouldDisplayNotFound() {
        // given
        HttpServletRequest request = mock(HttpServletRequest.class);

        // when
        ModelAndView actual = errorController.defaultErrorHandler(request, new RuntimeException());

        // then
        assertThat(actual.getViewName(), is("view/error/error"));
    }
}