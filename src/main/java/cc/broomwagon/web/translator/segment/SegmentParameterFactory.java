package cc.broomwagon.web.translator.segment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Component
public class SegmentParameterFactory {
    @Autowired
    Collection<SegmentParameterResolver> resolvers;
    @Autowired
    @Qualifier("fallbackResolver")
    private SegmentParameterResolver fallbackResolver;

    public Map<String, Object> translate(Map<String, Object> in) {
        Map<String, Object> result = new HashMap<>(in.size());
        in.forEach((k, v) -> {
            Optional<SegmentParameterResolver> resolver = resolvers.stream()
                    .filter(r -> r.key().equals(k))
                    .findFirst();
            result.put(k, resolver.orElse(fallbackResolver).resolve(v));
        });

        return result;
    }
}
