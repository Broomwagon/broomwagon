package cc.broomwagon.web.translator;

import static java.util.stream.Collectors.toList;
import static java.util.stream.StreamSupport.stream;

import cc.broomwagon.model.page.Page;
import cc.broomwagon.model.page.Row;
import cc.broomwagon.model.page.Segment;
import cc.broomwagon.web.ui.PageForm;
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
                .rows(stream(form.getRows().spliterator(), false)
                                .map(row -> Row.builder()
                                        .segments(stream(row.getSegments().spliterator(), false)
                                                .map(segment -> Segment.builder()
                                                        .id(segment.getId())
                                                        .template(segment.getTemplate())
                                                        .fragment(segment.getFragment())
                                                        .cssClass(segment.getCssClass())
                                                        .parameters(segment.getParameters())
                                                        .build())
                                                .collect(toList()))
                                        .build())
                                .collect(toList())
                ).build();
    }
}
