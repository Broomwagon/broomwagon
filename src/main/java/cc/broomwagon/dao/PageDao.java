package cc.broomwagon.dao;

import cc.broomwagon.model.Page;

import java.util.Optional;

/**
 * Interface to retrieve Pages.
 */
public interface PageDao {
    Iterable<Page> getPages();

    Optional<Page> getPageByUrl(String url);

    Optional<Page> getPageById(Long id);
}
