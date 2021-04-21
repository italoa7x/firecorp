package br.edu.ifpb.firecorp.config.security.authentication;

import java.util.HashSet;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.edu.ifpb.firecorp.domain.model.Conta;
import br.edu.ifpb.firecorp.domain.repository.ContaRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
	@Autowired
	private ContaRepository contaRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<Conta> contaEmail = contaRepository.findByEmailIgnoreCase(username);
		
		Conta conta = contaEmail.orElseThrow(() -> new UsernameNotFoundException("E-mail ou senha incorreto"));
		
		return new CustomUser(conta, new HashSet<>());
	}

}
