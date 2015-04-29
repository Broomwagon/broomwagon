package cc.broomwagon.web.controller;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.HashMap;
import java.util.Map;

@RunWith(MockitoJUnitRunner.class)
public class HomeControllerTest {
    @InjectMocks
    private HomeController homeController;

    @Test
    public void testHome() throws Exception {
        // given
        Map<String, Object> model = new HashMap<>();

        // when
        String actual = homeController.home(model);

        // then
        assertThat(actual, is("view/home"));
    }
}