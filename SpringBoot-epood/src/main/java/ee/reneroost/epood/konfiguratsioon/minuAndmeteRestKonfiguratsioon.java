package ee.reneroost.epood.konfiguratsioon;

import ee.reneroost.epood.olem.Toode;
import ee.reneroost.epood.olem.TooteKategooria;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

@Configuration
public class minuAndmeteRestKonfiguratsioon implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        HttpMethod[] mitteToetatavadTegevused = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE};

        config.getExposureConfiguration()
                .forDomainType(Toode.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(mitteToetatavadTegevused))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(mitteToetatavadTegevused));

        config.getExposureConfiguration()
                .forDomainType(TooteKategooria.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(mitteToetatavadTegevused))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(mitteToetatavadTegevused));

    }
}
