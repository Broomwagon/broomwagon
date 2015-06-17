package cc.broomwagon.web.translator.segment;

import org.springframework.stereotype.Component;

/**
 * Fallback resolver giving back whatever comes in.
 */
@Component(value = "fallbackResolver")
public class SegmentSimpleTextParameterResolver implements SegmentParameterResolver {

    @Override
    public String key() {
        return "fallback";
    }

    @Override
    public Object resolve(Object in) {
        return in;
    }
}
