package cc.broomwagon.service;

import cc.broomwagon.model.page.Page;

import java.util.Collection;
import java.util.Optional;

/**
 * Interface to retrieve/manipulate pages.
 */
public interface PageManager {
    Collection<Page> getPages();

    Optional<Page> getPageByUrl(String url);

    Optional<Page> getPageById(Long id);

    Optional<Page> update(Page page);

    Optional<Page> save(Page page);
}
