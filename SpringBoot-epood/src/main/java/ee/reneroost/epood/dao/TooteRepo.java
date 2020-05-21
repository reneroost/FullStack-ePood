package ee.reneroost.epood.dao;

import ee.reneroost.epood.olem.Toode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "tooted", path = "tooted")
public interface TooteRepo extends JpaRepository<Toode, Long> {

    Page<Toode> findByKategooriaId(@RequestParam("id") Long id, Pageable pageable);

    Page<Toode> findByNimiContaining(@RequestParam("nimi") String nimi, Pageable pageable);
}
