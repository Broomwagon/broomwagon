package cc.broomwagon.dao;

import static java.util.Arrays.asList;
import static java.util.Collections.emptyList;

import cc.broomwagon.model.Product;
import cc.broomwagon.model.page.Page;
import cc.broomwagon.model.page.Segment;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
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
                                Segment.builder().id(1l).template("segment/product/product-item")
                                        .fragment("product").parameters(sampleMap()).cssClass("col-xs-12 col-sm-6 col-md-3").build(),
                                Segment.builder().id(2l).template("segment/product/product-item")
                                        .fragment("product").parameters(sampleMap()).cssClass("col-xs-12 col-sm-6 col-md-3").build(),
                                Segment.builder().id(3l).template("segment/product/product-item")
                                        .fragment("product").parameters(sampleMap()).cssClass("col-xs-12 col-sm-6 col-md-3").build(),
                                Segment.builder().id(4l).template("segment/product/product-item")
                                        .fragment("product").parameters(sampleMap()).cssClass("col-xs-12 col-sm-6 col-md-3").build()
                        )).build(),

                Page.builder().id(2L).title("Products").url("/products").segments(emptyList()).build(),
                Page.builder().id(3L).title("Product").url("/products/.*").segments(emptyList()).build()
        );
    }

    private Map<String, Object> sampleMap() {
        Map<String, Object> parameters = new HashMap<>();
        parameters.put("cornerText", "On Sale");
        parameters.put("url", "url1");
        parameters.put("title", "Litespeed T1 2015");
        parameters.put("testProduct",
                Product.builder().id(1L).title("this is title").url("url2").build());
        return parameters;
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
