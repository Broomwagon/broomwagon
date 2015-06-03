package cc.broomwagon.service;

import cc.broomwagon.model.page.Page;

import java.util.Optional;

/**
 * Interface to retrieve/manipulate pages.
 */
public interface PageManager {
    Iterable<Page> getPages();

    Optional<Page> getPageByUrl(String url);

    Optional<Page> getPageById(Long id);
}
