package cc.broomwagon.web.controller;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.runners.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class LoginControllerTest {
    @InjectMocks
    private LoginController loginController;

    @Test
    public void shouldDisplayLogin() {

        // when
        String actual = loginController.login();

        // then
        assertThat(actual, is("view/login"));
    }
}