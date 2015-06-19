package cc.broomwagon.web.translator.segment;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.runners.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class SegmentSimpleTextParameterResolverTest {
    @InjectMocks
    private SegmentSimpleTextParameterResolver segmentSimpleTextParameterResolver;

    @Test
    public void shouldReturnKey() {

        // when
        String actual = segmentSimpleTextParameterResolver.key();

        // then
        assertThat(actual, is("fallback"));
    }

    @Test
    public void shouldResolve() {

        // when
        Object actual = segmentSimpleTextParameterResolver.resolve("test", "url");

        // then
        assertThat(actual, is("test"));
    }
}