package br.edu.ifpb.firecorp.domain.repository;

import java.util.Optional;

import br.edu.ifpb.firecorp.domain.model.Conta;
import br.edu.ifpb.firecorp.infrastructure.repository.FirecorpJpaRepository;

public interface ContaRepository extends FirecorpJpaRepository<Conta, Long> {
	
	public Optional<Conta> findByEmailIgnoreCase(String email);

}
