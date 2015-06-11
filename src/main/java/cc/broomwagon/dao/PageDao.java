package cc.broomwagon.dao;

import cc.broomwagon.model.page.Page;

import java.util.Optional;

/**
 * Interface to retrieve Pages.
 */
public interface PageDao {
    Iterable<Page> getPages();

    Optional<Page> getPageByUrl(String url);

    Optional<Page> getPageById(Long id);

    Optional<Page> update(Page page);
}
