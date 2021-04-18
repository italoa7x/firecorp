package br.edu.ifpb.firecorp.rest.dto.input;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import br.edu.ifpb.firecorp.domain.model.TipoPatente;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BombeiroInput {
	
	@NotBlank
	private String matricula;
	
	@NotNull
	private TipoPatente tipoPatente;
	
	@NotNull
	private PessoaCadastroInput pessoa;
	
}
