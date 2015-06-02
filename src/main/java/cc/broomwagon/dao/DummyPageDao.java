package cc.broomwagon.dao;

import static java.util.Arrays.asList;
import static java.util.Collections.EMPTY_LIST;

import cc.broomwagon.model.Page;
import cc.broomwagon.model.Segment;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Optional;

/**
 * Dummy dao - returns hardcoded pages.
 */
@Repository
public class DummyPageDao implements PageDao {
    private Collection<Page> pages;

    public DummyPageDao() {
        this.pages = asList(
                Page.builder().id(1L).title("Home").url("/")
                        .segments(asList(
                                Segment.builder().id(1l).template("segment/product/product-item").fragment("product").build(),
                                Segment.builder().id(2l).template("segment/product/product-item").fragment("product").build(),
                                Segment.builder().id(3l).template("segment/product/product-item").fragment("product").build(),
                                Segment.builder().id(4l).template("segment/product/product-item").fragment("product").build()
                        )).build(),

                Page.builder().id(2L).title("Products").url("/products").segments(EMPTY_LIST).build(),
                Page.builder().id(3L).title("Product").url("/products/.*").segments(EMPTY_LIST).build()
        );
    }


    @Override
    public Iterable<Page> getPages() {
        return pages;
    }

    @Override
    public Optional<Page> getPageByUrl(String url) {
        return pages.stream()
                .filter(page -> url.matches(page.getUrl()))
                .findFirst();
    }

    @Override
    public Optional<Page> getPageById(Long id) {
        return pages.stream()
                .filter(page -> page.getId().equals(id))
                .findFirst();
    }
}
