package cc.broomwagon.web.exception;

/**
 * Exception to represent 404 errors.
 */
public class PageNotFoundException extends RuntimeException {

    public PageNotFoundException(String message) {
        super(message);
    }
}
