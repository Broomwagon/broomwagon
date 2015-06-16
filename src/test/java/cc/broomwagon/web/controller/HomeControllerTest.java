package cc.broomwagon.web.controller;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.runners.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class HomeControllerTest {
    @InjectMocks
    private HomeController homeController;

    @Test
    public void shouldDisplayHome() {

        // when
        String actual = homeController.home();

        // then
        assertThat(actual, is("view/home"));
    }

    @Test
    public void shouldDisplayAdminHome() {

        // when
        String actual = homeController.adminHome();

        // then
        assertThat(actual, is("admin/view/index"));
    }
}