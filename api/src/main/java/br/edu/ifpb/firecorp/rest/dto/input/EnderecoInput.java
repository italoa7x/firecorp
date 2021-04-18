package br.edu.ifpb.firecorp.rest.dto.input;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EnderecoInput {
	
	private String rua;
	
	private Integer numero;
	
	private String cep;
	
	private String descricao;
	
	private String complemento;
	
	private String referencia;

}
