package cc.broomwagon.web.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception to represent 404 errors for JSON.
 */
@ResponseStatus(value= HttpStatus.NOT_FOUND, reason="Not found")
public class ItemNotFoundException extends RuntimeException {
}
