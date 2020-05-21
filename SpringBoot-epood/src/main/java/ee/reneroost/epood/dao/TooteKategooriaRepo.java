package ee.reneroost.epood.dao;

import ee.reneroost.epood.olem.ToodeKategooria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "toodeKategooria", path = "toote-kategooria")
public interface TooteKategooriaRepo extends JpaRepository<ToodeKategooria, Long> {
}
