package br.edu.ifpb.firecorp.domain.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifpb.firecorp.domain.exception.BombeiroNaoEncontradoException;
import br.edu.ifpb.firecorp.domain.exception.MatriculaUnicaException;
import br.edu.ifpb.firecorp.domain.model.Bombeiro;
import br.edu.ifpb.firecorp.domain.model.Conta;
import br.edu.ifpb.firecorp.domain.model.Pessoa;
import br.edu.ifpb.firecorp.domain.repository.BombeiroRepository;

@Service
public class BombeiroService {

	@Autowired
	private BombeiroRepository bombeiroRepository;
	
	@Autowired
	private ContaService contaService;
	
	@Autowired
	private PessoaService pessoaService;
	
	@Transactional
	public Bombeiro salvar(Bombeiro bombeiro) {
		bombeiroRepository.detach(bombeiro);
		
		String matricula = bombeiro.getMatricula();
		
		Optional<Bombeiro> bombeiroMatricula = bombeiroRepository.findByMatriculaIgnoreCase(matricula);
		
		if (bombeiroMatricula.isPresent() && !bombeiro.equals(bombeiroMatricula.get())) {
			throw new MatriculaUnicaException(matricula);
		}
		
		Conta conta = contaService.salvar(bombeiro.getConta());
		Pessoa pessoa = pessoaService.salvar(bombeiro.getPessoa());
				
		bombeiro.setConta(conta);
		bombeiro.setPessoa(pessoa);
		
		return bombeiroRepository.save(bombeiro);
	}
	
	public Bombeiro buscar(Long id) {
		return bombeiroRepository.findById(id).orElseThrow(() -> new BombeiroNaoEncontradoException(id));
	}
	
	public List<Bombeiro> listar() {
		return bombeiroRepository.findAll();
	}
	
}
