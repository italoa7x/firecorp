package br.edu.ifpb.firecorp.rest.dto.input;

import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContaCadastroInput {
	
	@NotBlank
	private String email;
	
	@NotBlank
	private String senha;

}
