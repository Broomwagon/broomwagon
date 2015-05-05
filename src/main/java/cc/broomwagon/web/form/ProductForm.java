package cc.broomwagon.web.form;

import lombok.Data;
import org.hibernate.validator.constraints.NotEmpty;

@Data
public class ProductForm {
    @NotEmpty
    String title;
    String url;
}
