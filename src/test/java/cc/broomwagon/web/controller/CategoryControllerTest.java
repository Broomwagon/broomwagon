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
public class CategoryControllerTest {
    @InjectMocks
    private CategoryController categoryController;

    @Test
    public void shouldDisplayCategory() {
        // given
        Map<String, Object> model = new HashMap<>();

        // when
        String actual = categoryController.category(model);

        // then
        assertThat(actual, is("view/category"));
    }
}