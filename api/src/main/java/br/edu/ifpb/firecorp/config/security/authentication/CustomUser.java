package br.edu.ifpb.firecorp.config.security.authentication;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import br.edu.ifpb.firecorp.domain.model.Conta;
import lombok.Getter;

@Getter
public class CustomUser extends User {

	private static final long serialVersionUID = 1L;
	
	private Long id;

	public CustomUser(Conta conta, Collection<? extends GrantedAuthority> authorities) {
		super(conta.getEmail(), conta.getSenha(), authorities);
		
		this.id = conta.getId();
	}

}
