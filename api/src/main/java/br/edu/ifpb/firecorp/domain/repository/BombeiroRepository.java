package br.edu.ifpb.firecorp.domain.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ifpb.firecorp.domain.model.Bombeiro;

public interface BombeiroRepository extends JpaRepository<Bombeiro, Long> {
	
	public Optional<Bombeiro> findByMatriculaIgnoreCase(String matricula);
	
	public Optional<Bombeiro> findByPessoaCpf(String cpf);

}
