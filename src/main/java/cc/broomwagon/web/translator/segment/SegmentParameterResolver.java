package cc.broomwagon.web.translator.segment;

/**
 * Interface to compute parameters.
 */
public interface SegmentParameterResolver {
    /**
     * Key which this resolver acts on.
     *
     * @return key
     */
    String key();

    /**
     * Resolved object, can be Product etc.
     * @param in - object to resolve, most likekly String from CMS.
     * @return resolved object like Product
     */
    Object resolve(Object in);
}
