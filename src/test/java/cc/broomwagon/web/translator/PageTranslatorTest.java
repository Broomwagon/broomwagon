package cc.broomwagon.web.translator;

import static com.google.common.collect.Iterables.getFirst;
import static com.google.common.collect.Iterables.size;
import static java.util.Arrays.asList;
import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.Matchers.*;

import cc.broomwagon.model.page.Page;
import cc.broomwagon.model.page.Segment;
import cc.broomwagon.web.ui.PageForm;
import cc.broomwagon.web.ui.RowForm;
import cc.broomwagon.web.ui.SegmentForm;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.runners.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class PageTranslatorTest {
    @InjectMocks
    private PageTranslator pageTranslator;

    @SuppressWarnings("ConstantConditions")
    @Test
    public void shouldTranslatePage() {
        // given
        PageForm pageForm = new PageForm();
        pageForm.setId(1L);
        pageForm.setTitle("title");
        pageForm.setUrl("url");

        SegmentForm segmentForm = new SegmentForm();
        segmentForm.setId(1L);
        segmentForm.setFragment("fragment");
        segmentForm.setTemplate("template");
        segmentForm.setCssClass("css");

        RowForm rowForm = new RowForm();
        rowForm.setSegments(asList(segmentForm, segmentForm, segmentForm));

        Iterable<RowForm> rows = asList(rowForm, rowForm);

        pageForm.setRows(rows);

        // when
        Page actual = pageTranslator.translate(pageForm);

        // then
        assertThat(actual, is(notNullValue()));
        assertThat(actual.getId(), is(1L));
        assertThat(actual.getUrl(), is("url"));
        assertThat(actual.getTitle(), is("title"));

        assertThat(size(actual.getRows()), is(2));
        assertThat(size(getFirst(actual.getRows(), null).getSegments()), is(3));
        assertThat(getFirst(getFirst(actual.getRows(), null).getSegments(), null).getCssClass(), is("css"));
    }

    @Test
    public void shouldTranslateSegment() {
        // given
        SegmentForm segmentForm = new SegmentForm();
        segmentForm.setFragment("fragment");
        segmentForm.setTemplate("template");
        segmentForm.setCssClass("css");

        // when
        Segment actual = pageTranslator.translate(segmentForm);

        // then
        assertThat(actual.getId(), is(0L));
        assertThat(actual.getFragment(), is("fragment"));
        assertThat(actual.getTemplate(), is("template"));
        assertThat(actual.getCssClass(), is("css"));
    }

}