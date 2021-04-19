package br.edu.ifpb.firecorp.domain.repository;

import java.util.Optional;

import br.edu.ifpb.firecorp.domain.model.Pessoa;
import br.edu.ifpb.firecorp.infrastructure.repository.FirecorpJpaRepository;

public interface PessoaRepository extends FirecorpJpaRepository<Pessoa, Long> {
	
	public Optional<Pessoa> findByCpf(String cpf);

}
