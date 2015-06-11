package cc.broomwagon.service;

import cc.broomwagon.dao.PageDao;
import cc.broomwagon.model.page.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DefaultPageManager implements PageManager {
    @Autowired
    private PageDao pageDao;

    @Override
    public Iterable<Page> getPages() {
        return pageDao.getPages();
    }

    @Override
    public Optional<Page> getPageByUrl(String url) {
        return pageDao.getPageByUrl(url);
    }

    @Override
    public Optional<Page> getPageById(Long id) {
        return pageDao.getPageById(id);
    }

    @Override
    public Optional<Page> update(Page page) {
        return pageDao.update(page);
    }
}
