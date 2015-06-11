package cc.broomwagon.web.api;

import static cc.broomwagon.TestFactory.*;
import static com.google.common.collect.Iterables.size;
import static java.util.Collections.singletonList;
import static java.util.Optional.empty;
import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.Matchers.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.verify;

import cc.broomwagon.model.page.Segment;
import cc.broomwagon.service.SegmentManager;
import cc.broomwagon.web.exception.ItemNotFoundException;
import cc.broomwagon.web.translator.PageTranslator;
import cc.broomwagon.web.ui.SegmentForm;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.Optional;

@RunWith(MockitoJUnitRunner.class)
public class JsonSegmentControllerTest {
    @InjectMocks
    private JsonSegmentController jsonSegmentController;
    @Mock
    private SegmentManager segmentManager;
    @Mock
    private PageTranslator pageTranslator;

    @Test
    public void shouldFind() {
        // given
        given(segmentManager.getSegments()).willReturn(singletonList(aSegment()));

        // when
        Iterable<Segment> actual = jsonSegmentController.find();

        // then
        verify(segmentManager).getSegments();
        assertThat(size(actual), is(1));
    }

    @Test
    public void shouldGet() {
        // given
        given(segmentManager.getSegmentById(1L)).willReturn(Optional.of(aSegment()));

        // when
        jsonSegmentController.get(1L);

        // then
        verify(segmentManager).getSegmentById(1L);
    }

    @Test(expected = ItemNotFoundException.class)
    public void shouldThrowExceptionIfNoSegment() {
        // given
        given(segmentManager.getSegmentById(any(Long.class))).willReturn(empty());

        // when
        jsonSegmentController.get(2l);

        // then
        // exception
    }

    @Test
    public void shouldUpdateSegment() {
        // given
        SegmentForm segmentForm = new SegmentForm();
        Segment segment = aSegment();
        given(pageTranslator.translate(segmentForm)).willReturn(segment);
        given(segmentManager.update(segment)).willReturn(Optional.of(segment));

        // when
        Segment actual = jsonSegmentController.update(segmentForm, 1L);

        // then
        assertThat(actual, is(notNullValue()));
        verify(pageTranslator).translate(segmentForm);
    }

    @Test(expected = ItemNotFoundException.class)
    public void shouldNotUpdateSegment() {
        // given
        SegmentForm segmentForm = new SegmentForm();
        Segment segment = aSegment();
        given(pageTranslator.translate(segmentForm)).willReturn(segment);
        given(segmentManager.update(segment)).willReturn(Optional.empty());

        // when
        jsonSegmentController.update(segmentForm, 1L);

        // then
        // exception
    }
}