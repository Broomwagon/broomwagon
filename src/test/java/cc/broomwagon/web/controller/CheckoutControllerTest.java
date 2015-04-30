package cc.broomwagon.web.controller;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.runners.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class CheckoutControllerTest {
    @InjectMocks
    private CheckoutController checkoutController;

    @Test
    public void shouldShow() {
        // when
        String actual = checkoutController.show();

        // then
        assertThat(actual, is("view/checkout"));
    }

    @Test
    public void shouldProcess() {
        // when
        String actual = checkoutController.process();

        // then
        assertThat(actual, is("view/checkout-thanks"));
    }
}