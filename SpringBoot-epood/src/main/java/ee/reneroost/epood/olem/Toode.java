package ee.reneroost.epood.olem;


import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name="product")
@Data
public class Toode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private ToodeKategooria kategooria;

    @Column(name = "sku")
    private String sku;

    @Column(name = "name")
    private String nimi;

    @Column(name = "description")
    private String kirjeldus;

    @Column(name = "unit_price")
    private BigDecimal artikliHind;

    @Column(name = "image_url")
    private String pildiUrl;

    @Column(name = "active")
    private boolean aktiivne;

    @Column(name = "units_in_stock")
    private int artikleidLaos;

    @Column(name = "date_created")
    @CreationTimestamp
    private Date loomisKuupaev;

    @Column(name = "last_updated")
    @UpdateTimestamp
    private Date viimaneUuendus;
}
