package cc.broomwagon.web.translator.segment;

/**
 * Interface to compute parameters.
 */
public interface SegmentParameterResolver {
    String key();

    Object resolve(Object in);
}
