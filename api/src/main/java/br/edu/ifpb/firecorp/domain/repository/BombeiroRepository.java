package br.edu.ifpb.firecorp.domain.repository;

import java.util.Optional;

import br.edu.ifpb.firecorp.domain.model.Bombeiro;
import br.edu.ifpb.firecorp.infrastructure.repository.FirecorpJpaRepository;

public interface BombeiroRepository extends FirecorpJpaRepository<Bombeiro, Long> {
	
	public Optional<Bombeiro> findByMatriculaIgnoreCase(String matricula);

}
