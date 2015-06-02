package cc.broomwagon.dao;

import static java.util.Arrays.asList;

import cc.broomwagon.model.Page;
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
                Page.builder().id(1L).title("Home").url("/").build(),
                Page.builder().id(2L).title("Products").url("/products").build(),
                Page.builder().id(3L).title("Product").url("/products/*.").build()
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
