package br.edu.ifpb.firecorp.rest.dto.output;

import br.edu.ifpb.firecorp.domain.model.TipoPatente;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BombeiroOutput {
	
	private Long id;
	
	private String matricula;
	
	private TipoPatente tipoPatente;
	
	private ContaOutput conta;
	
	private PessoaOutput pessoa;
	
}
