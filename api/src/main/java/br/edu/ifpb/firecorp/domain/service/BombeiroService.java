package br.edu.ifpb.firecorp.domain.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifpb.firecorp.domain.exception.BombeiroNaoEncontradoException;
import br.edu.ifpb.firecorp.domain.exception.CpfBombeiroUnicoUnicoException;
import br.edu.ifpb.firecorp.domain.exception.MatriculaUnicaException;
import br.edu.ifpb.firecorp.domain.model.Bombeiro;
import br.edu.ifpb.firecorp.domain.model.Conta;
import br.edu.ifpb.firecorp.domain.repository.BombeiroRepository;

@Service
public class BombeiroService {

	@Autowired
	private BombeiroRepository bombeiroRepository;
	
	@Autowired
	private ContaService contaService;
	
	@Autowired
	private EntityManager em;
	
	@Transactional
	public Bombeiro salvar(Bombeiro bombeiro) {
		em.detach(bombeiro);
		
		String matricula = bombeiro.getMatricula();
		String cpf = bombeiro.getPessoa().getCpf();
		
		Optional<Bombeiro> bombeiroMatricula = bombeiroRepository.findByMatriculaIgnoreCase(matricula);
		
		if (bombeiroMatricula.isPresent() && !bombeiro.equals(bombeiroMatricula.get())) {
			throw new MatriculaUnicaException(matricula);
		}
		
		Optional<Bombeiro> bombeiroCpf = bombeiroRepository.findByPessoaCpf(cpf);
		
		if (bombeiroCpf.isPresent() && !bombeiro.equals(bombeiroCpf.get())) {
			throw new CpfBombeiroUnicoUnicoException(cpf);
		}
		
		Conta conta = contaService.salvar(bombeiro.getConta());
		bombeiro.setConta(conta);
		
		return bombeiroRepository.save(bombeiro);
	}
	
	public Bombeiro buscar(Long id) {
		return bombeiroRepository.findById(id).orElseThrow(() -> new BombeiroNaoEncontradoException(id));
	}
	
	public List<Bombeiro> listar() {
		return bombeiroRepository.findAll();
	}
	
}
