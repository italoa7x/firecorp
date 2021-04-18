package br.edu.ifpb.firecorp.domain.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifpb.firecorp.domain.exception.EmailUnicoException;
import br.edu.ifpb.firecorp.domain.model.Conta;
import br.edu.ifpb.firecorp.domain.repository.ContaRepository;

@Service
public class ContaService {
	
	@Autowired
	private ContaRepository contaRepository;
	
	@Transactional
	public Conta salvar(Conta conta) {
		Optional<Conta> contaEmail = contaRepository.findByEmailIgnoreCase(conta.getEmail());
		
		if (contaEmail.isPresent() && !conta.equals(contaEmail.get())) {
			throw new EmailUnicoException(conta.getEmail());
		}
		
		return contaRepository.save(conta);
	}

}
