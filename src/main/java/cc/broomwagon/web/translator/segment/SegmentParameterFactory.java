package cc.broomwagon.web.translator.segment;

import static java.util.stream.Collectors.toList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Map;

@Component
public class SegmentParameterFactory {
    @Autowired
    Collection<SegmentParameterResolver> resolvers;

    public Map<String, Object> translate(Map<String, Object> in) {
        resolvers
                .stream()
                .peek(resolver -> in.computeIfPresent(resolver.key(), (k, v) -> resolver.resolve(v)))
                .collect(toList());
        return in;
    }
}
