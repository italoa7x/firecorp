package br.edu.ifpb.firecorp.rest.dto.output;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EnderecoOutput {
	
	private Long id;
	
	private String rua;
	
	private Integer numero;
	
	private String cep;
	
	private String descricao;
	
	private String complemento;
	
	private String referencia;

}
