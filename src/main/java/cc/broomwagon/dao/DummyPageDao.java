package cc.broomwagon.dao;

import static java.util.Arrays.asList;
import static java.util.Collections.emptyList;
import static java.util.Collections.singletonList;
import static java.util.Optional.of;
import static org.springframework.util.ReflectionUtils.findField;
import static org.springframework.util.ReflectionUtils.setField;

import cc.broomwagon.model.page.Page;
import cc.broomwagon.model.page.Row;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Collection;
import java.util.LongSummaryStatistics;
import java.util.Optional;

/**
 * Dummy dao - returns hardcoded pages.
 */
@Repository
public class DummyPageDao implements PageDao {
    private Collection<Page> pages;
    @Autowired
    private SegmentDao segmentDao;

    @Override
    public Collection<Page> getPages() {
        if (pages == null) {
            pages = init();
        }
        return pages;
    }

    @Override
    public Optional<Page> getPageByUrl(String url) {
        return getPages().stream()
                .filter(page -> url.matches(page.getUrl()))
                .findFirst();
    }

    @Override
    public Optional<Page> getPageById(Long id) {
        return getPages().stream()
                .filter(page -> page.getId().equals(id))
                .findFirst();
    }

    @Override
    public Optional<Page> update(Page page) {
        getPages().removeIf(p -> p.getId().equals(page.getId()));
        getPages().add(page);
        return of(page);
    }

    @Override
    public Optional<Page> save(Page page) {
        LongSummaryStatistics stats = getPages().stream()
                .mapToLong(Page::getId)
                .summaryStatistics();

        getPages().add(page);
        return of(setId(page, stats.getMax() + 1));
    }

    /**
     * This is a hack to duplicate db logic. Generating next id.
     *
     * @param page - page to set id
     * @param id   - id for the page
     * @return - page with id set
     */
    private Page setId(Page page, Long id) {
        Field idField = findField(Page.class, "id");
        idField.setAccessible(true);
        setField(idField, page, id);
        idField.setAccessible(false);
        return page;
    }

    private Collection<Page> init() {
        Collection<Page> pages = new ArrayList<>();
        pages.add(Page.builder().id(1L).title("Home").url("/")
                .rows(asList(
                        sliderRow(),
                        productRow(),
                        promoRow()
                )).build());
        pages.add(Page.builder().id(2L).title("Products").url("/products").rows(emptyList()).build());
        pages.add(Page.builder().id(3L).title("Product").url("/products/.*").rows(emptyList()).build());
        return pages;
    }

    private Row sliderRow() {
        return Row.builder().segments(singletonList(
                segmentDao.getSegmentById(1L).get()
        )).build();
    }

    private Row productRow() {
        return Row.builder().segments(asList(
                segmentDao.getSegmentById(2L).get(),
                segmentDao.getSegmentById(2L).get(),
                segmentDao.getSegmentById(2L).get(),
                segmentDao.getSegmentById(2L).get()
        )).build();
    }

    private Row promoRow() {
        return Row.builder().segments(asList(
                segmentDao.getSegmentById(3L).get(),
                segmentDao.getSegmentById(3L).get(),
                segmentDao.getSegmentById(3L).get()
        )).build();
    }
}
