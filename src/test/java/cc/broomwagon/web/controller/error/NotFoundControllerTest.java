package cc.broomwagon.web.controller.error;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.web.servlet.ModelAndView;

@RunWith(MockitoJUnitRunner.class)
public class NotFoundControllerTest {
    @InjectMocks
    private NotFoundController notFoundController;

    @Test
    public void shouldDisplayNotFound() {

        // when
        ModelAndView actual = notFoundController.notFound();

        // then
        assertThat(actual.getViewName(), is("view/error/not-found"));
    }
}