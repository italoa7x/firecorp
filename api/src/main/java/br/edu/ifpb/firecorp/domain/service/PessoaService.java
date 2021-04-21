package br.edu.ifpb.firecorp.domain.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifpb.firecorp.domain.exception.CpfUnicoException;
import br.edu.ifpb.firecorp.domain.exception.RgUnicoException;
import br.edu.ifpb.firecorp.domain.model.Pessoa;
import br.edu.ifpb.firecorp.domain.repository.PessoaRepository;

@Service
public class PessoaService {
	
	@Autowired
	private PessoaRepository pessoaRepository;
	
	@Transactional
	public Pessoa salvar(Pessoa pessoa) {
		pessoaRepository.detach(pessoa);
		
		String cpf = pessoa.getCpf();
		String rg = pessoa.getRg();
		String orgaoExpedidor = pessoa.getOrgaoExpedidor();
		
		Optional<Pessoa> pessoaCpf = pessoaRepository.findByCpf(cpf);
		
		if (pessoaCpf.isPresent() && !pessoa.equals(pessoaCpf.get())) {
			throw new CpfUnicoException(cpf);
		}
		
		Optional<Pessoa> pessoaRg = pessoaRepository.findByRgAndOrgaoExpedidor(rg, orgaoExpedidor);
		
		if (pessoaRg.isPresent() && !pessoa.equals(pessoaRg.get())) {
			throw new RgUnicoException(cpf);
		}
		
		return pessoaRepository.save(pessoa);
	}

}
