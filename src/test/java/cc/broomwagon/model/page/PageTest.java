package cc.broomwagon.model.page;

import static cc.broomwagon.TestFactory.aColumnWithId;
import static cc.broomwagon.TestFactory.aPage;
import static cc.broomwagon.TestFactory.aRow;
import static java.util.Arrays.asList;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasSize;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.Collection;

@RunWith(MockitoJUnitRunner.class)
public class PageTest {

    @Test
    public void shouldGetAllSegments() {
        // given
        Page page = aPage(asList(
                aRow(asList(aColumnWithId(1L), aColumnWithId(2L))),
                aRow(asList(aColumnWithId(2L), aColumnWithId(3L))),
                aRow(asList(aColumnWithId(3L), aColumnWithId(4L)))
        ));

        // when
        Collection<Long> actual = page.getSegmentIds();

        // then
        assertThat(actual, hasSize(4));
    }
}