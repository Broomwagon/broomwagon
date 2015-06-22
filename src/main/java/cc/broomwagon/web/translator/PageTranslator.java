package cc.broomwagon.web.translator;

import static java.util.stream.Collectors.toList;

import cc.broomwagon.model.page.Column;
import cc.broomwagon.model.page.Page;
import cc.broomwagon.model.page.Row;
import cc.broomwagon.model.page.Segment;
import cc.broomwagon.web.ui.ColumnForm;
import cc.broomwagon.web.ui.PageForm;
import cc.broomwagon.web.ui.SegmentForm;
import org.springframework.stereotype.Component;

/**
 * Class to translate between page and page form.
 */
@Component
public class PageTranslator {

    public Page translate(PageForm form) {
        return Page.builder()
                .id(form.getId() == null ? 0L : form.getId())
                .title(form.getTitle())
                .url(form.getUrl())
                .rows(form.getRows().stream()
                                .map(row -> Row.builder()
                                        .columns(row.getColumns().stream()
                                                .map(this::translate)
                                                .collect(toList()))
                                        .build())
                                .collect(toList())
                ).build();
    }

    public Column translate(ColumnForm form) {
        return Column.builder()
                .cssClass(form.getCssClass())
                .segmentId(form.getSegmentId())
                .build();
    }

    public Segment translate(SegmentForm form) {
        return Segment.builder()
                .id(form.getId() == null ? 0L : form.getId())
                .template(form.getTemplate())
                .fragment(form.getFragment())
                .parameters(form.getParameters())
                .build();
    }
}
