package br.edu.ifpb.firecorp.domain.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ifpb.firecorp.domain.model.Conta;

public interface ContaRepository extends JpaRepository<Conta, Long> {
	
	public Optional<Conta> findByEmailIgnoreCase(String email);

}
