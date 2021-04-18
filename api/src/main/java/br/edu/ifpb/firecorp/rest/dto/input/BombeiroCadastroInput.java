package br.edu.ifpb.firecorp.rest.dto.input;

import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BombeiroCadastroInput extends BombeiroInput {
	
	@NotNull
	private ContaCadastroInput conta;
	
}
