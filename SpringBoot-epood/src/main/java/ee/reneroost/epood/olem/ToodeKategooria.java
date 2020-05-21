package ee.reneroost.epood.olem;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "product_category")
// @Data -- Lomboki buggi
@Getter
@Setter
public class ToodeKategooria {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "category_name")
    private String kategooriaNimi;

    @OneToMany(cascade =  CascadeType.ALL, mappedBy = "kategooria")
    private Set<Toode> tooted;
}
