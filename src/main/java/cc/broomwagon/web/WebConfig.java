package cc.broomwagon.web;


import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;
import static org.springframework.http.HttpStatus.NOT_FOUND;

import cc.broomwagon.web.filter.CsrfHeaderFilter;
import cc.broomwagon.web.interceptor.MenuInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.context.embedded.ErrorPage;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.ui.context.ThemeSource;
import org.springframework.ui.context.support.ResourceBundleThemeSource;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.ThemeResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.handler.SimpleUrlHandlerMapping;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;
import org.springframework.web.servlet.mvc.UrlFilenameViewController;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;
import org.springframework.web.servlet.theme.FixedThemeResolver;

import java.util.Locale;
import java.util.Properties;

@Configuration
public class WebConfig extends WebMvcConfigurerAdapter {
    @Autowired
    private MenuInterceptor menuInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(menuInterceptor)
                .excludePathPatterns("/api/**")
                .excludePathPatterns("/admin**")
                .addPathPatterns("/**");
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addRedirectViewController("adminDemo", "/adminDemo/") //temporary, remove later
                .setKeepQueryParams(true)
                .setStatusCode(HttpStatus.PERMANENT_REDIRECT);

        registry.addRedirectViewController("admin", "/admin/")
                .setKeepQueryParams(true)
                .setStatusCode(HttpStatus.PERMANENT_REDIRECT);
    }

    @Bean
    public ThemeSource themeSource() {
        ResourceBundleThemeSource themeSource = new ResourceBundleThemeSource();
        themeSource.setBasenamePrefix("themes/");
        return themeSource;
    }

    @Bean
    public ThemeResolver themeResolver () {
        FixedThemeResolver fixedThemeResolver = new FixedThemeResolver();
        fixedThemeResolver.setDefaultThemeName("default");
        return fixedThemeResolver;
    }

    @Bean
    public LocaleResolver localeResolver() {
        SessionLocaleResolver sessionLocaleResolver = new SessionLocaleResolver();
        sessionLocaleResolver.setDefaultLocale(Locale.UK);
        return sessionLocaleResolver;
    }

    @Bean
    public LocaleChangeInterceptor localeChangeInterceptor() {
        LocaleChangeInterceptor localeChangeInterceptor = new LocaleChangeInterceptor();
        localeChangeInterceptor.setParamName("lang");
        return localeChangeInterceptor;
    }

    @Bean
    public EmbeddedServletContainerCustomizer containerCustomizer() {
        return container -> {
            container.addErrorPages(new ErrorPage(NOT_FOUND, "/404"));
            container.addErrorPages(new ErrorPage(INTERNAL_SERVER_ERROR, "/500"));
        };
    }

    @Bean(name = "urlViewController")
    public UrlFilenameViewController getUrlViewController() {
        UrlFilenameViewController urlViewController = new UrlFilenameViewController();
        urlViewController.setPrefix("view/dev/");
        return urlViewController;
    }

    // temporary for demo purposes, remove when not needed
    @Bean(name = "urlAdminDemoViewController")
    public UrlFilenameViewController getUrlAdminDemoViewController() {
        UrlFilenameViewController urlViewController = new UrlFilenameViewController();
        urlViewController.setPrefix("adminDemo/view/");
        return urlViewController;
    }

    @Bean(name = "urlAdminViewController")
    public UrlFilenameViewController getUrlAdminViewController() {
        UrlFilenameViewController urlViewController = new UrlFilenameViewController();
        urlViewController.setPrefix("admin/view/");
        return urlViewController;
    }

    @Bean
    public SimpleUrlHandlerMapping getUrlHandlerMapping() {
        SimpleUrlHandlerMapping handlerMapping = new SimpleUrlHandlerMapping();
        handlerMapping.setOrder(Integer.MAX_VALUE - 2);
        handlerMapping.setInterceptors(new Object[] { menuInterceptor });

        Properties mappings = new Properties();
        mappings.put("/dev/**", "urlViewController");
        mappings.put("/admin/**/*.html", "urlAdminViewController");

        mappings.put("/adminDemo/**/*.html", "urlAdminDemoViewController"); //temporary, remove later
        handlerMapping.setMappings(mappings);

        return handlerMapping;
    }

}
