package br.edu.ifpb.firecorp.rest.dto.output;

import java.time.LocalDate;

import br.edu.ifpb.firecorp.domain.model.Sexo;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PessoaOutput {
	
	private String nome;
	
	private String cpf;
	
	private String rg;
	
	private String orgaoExpedidor;
	
	private LocalDate dataNascimento;
	
	private Sexo sexo;
	
	private String telefone;
	
	private EnderecoOutput endereco;

}
