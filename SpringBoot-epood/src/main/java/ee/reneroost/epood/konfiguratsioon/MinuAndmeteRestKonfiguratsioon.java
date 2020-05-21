package ee.reneroost.epood.konfiguratsioon;

import ee.reneroost.epood.olem.Toode;
import ee.reneroost.epood.olem.ToodeKategooria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Configuration
public class MinuAndmeteRestKonfiguratsioon implements RepositoryRestConfigurer {

    private EntityManager olemiHaldur;

    @Autowired
    public MinuAndmeteRestKonfiguratsioon(EntityManager olemiHaldur) {
        this.olemiHaldur = olemiHaldur;
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        HttpMethod[] mitteToetatavadTegevused = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE};

        config.getExposureConfiguration()
                .forDomainType(Toode.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(mitteToetatavadTegevused))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(mitteToetatavadTegevused));

        config.getExposureConfiguration()
                .forDomainType(ToodeKategooria.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(mitteToetatavadTegevused))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(mitteToetatavadTegevused));

        avaldaIdd(config);
    }

    // sisemine meetod, et tuua valja Id-d JSONis
    private void avaldaIdd(RepositoryRestConfiguration config) {
        Set<EntityType<?>> olemid = olemiHaldur.getMetamodel().getEntities();
        List<Class> olemiKlassid = new ArrayList<>();

        for (EntityType olemiTyyp: olemid) {
            olemiKlassid.add(olemiTyyp.getJavaType());
        }

        Class[] domeeniTyybid = olemiKlassid.toArray(new Class[0]);
        config.exposeIdsFor(domeeniTyybid);
    }
}
