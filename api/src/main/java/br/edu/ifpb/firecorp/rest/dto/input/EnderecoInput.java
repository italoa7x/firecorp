package br.edu.ifpb.firecorp.rest.dto.input;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EnderecoInput {
	
	@NotBlank
	private String rua;
	
	@NotNull
	private Integer numero;
	
	@NotBlank
	private String cep;
	
	private String descricao;
	
	private String complemento;
	
	private String referencia;

}
