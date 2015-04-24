package cc.broomwagon.web;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.ui.context.ThemeSource;
import org.springframework.ui.context.support.ResourceBundleThemeSource;
import org.springframework.web.servlet.ThemeResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.theme.FixedThemeResolver;

@Configuration
public class WebConfig extends WebMvcConfigurerAdapter {

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

}
