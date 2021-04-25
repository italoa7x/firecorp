package br.edu.ifpb.firecorp.rest.dto.input;

import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BombeiroAtualizarInput extends BombeiroInput {
	
	@NotNull
	private ContaAtualizarInput conta;
	
}
