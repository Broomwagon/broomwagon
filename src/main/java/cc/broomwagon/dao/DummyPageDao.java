package cc.broomwagon.dao;

import static java.util.Arrays.asList;
import static java.util.Collections.emptyList;
import static java.util.Collections.emptyMap;
import static java.util.Collections.singletonList;

import cc.broomwagon.model.page.Page;
import cc.broomwagon.model.page.Row;
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
                        .rows(asList(
                                sliderRow(),
                                productRow(),
                                promoRow()
                        )).build(),
                Page.builder().id(2L).title("Products").url("/products").rows(emptyList()).build(),
                Page.builder().id(3L).title("Product").url("/products/.*").rows(emptyList()).build()
        );
    }

    private Row sliderRow() {
        return Row.builder().segments(singletonList(
                Segment.builder().id(1l).template("segment/slider")
                        .fragment("slider").parameters(emptyMap()).cssClass("").build()
        )).build();
    }

    private Row productRow() {
        return Row.builder().segments(asList(
                Segment.builder().id(1l).template("segment/product/product-item")
                        .fragment("product").parameters(sampleMap()).cssClass("col-xs-12 col-sm-6 col-md-3").build(),
                Segment.builder().id(2l).template("segment/product/product-item")
                        .fragment("product").parameters(sampleMap()).cssClass("col-xs-12 col-sm-6 col-md-3").build(),
                Segment.builder().id(3l).template("segment/product/product-item")
                        .fragment("product").parameters(sampleMap()).cssClass("col-xs-12 col-sm-6 col-md-3").build(),
                Segment.builder().id(4l).template("segment/product/product-item")
                        .fragment("product").parameters(sampleMap()).cssClass("col-xs-12 col-sm-6 col-md-3").build()
        )).build();
    }

    private Row promoRow() {
        return Row.builder().segments(asList(
                Segment.builder().id(1l).template("segment/promo")
                        .fragment("promo").parameters(putInMap(new HashMap<>(), "cssClass", "fa fa-bicycle fa-3x")).cssClass("col-md-4 promo").build(),
                Segment.builder().id(2l).template("segment/promo")
                        .fragment("promo").parameters(putInMap(new HashMap<>(), "cssClass", "fa fa-cog fa-spin fa-3x")).cssClass("col-md-4 promo").build(),
                Segment.builder().id(3l).template("segment/promo")
                        .fragment("promo").parameters(putInMap(new HashMap<>(), "cssClass", "fa fa-truck fa-4x")).cssClass("col-md-4 promo").build()
        )).build();
    }

    private Map<String, Object> sampleMap() {
        Map<String, Object> parameters = new HashMap<>();
        parameters.put("cornerText", "On Sale");
        parameters.put("url", "url1");
        parameters.put("title", "Litespeed T1 2015");
        return parameters;
    }

    private Map<String, Object> putInMap(Map<String, Object> map, String key, String value) {
        map.put(key, value);
        return map;
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
