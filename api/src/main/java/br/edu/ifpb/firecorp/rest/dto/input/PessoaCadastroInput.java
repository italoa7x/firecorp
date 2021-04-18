package br.edu.ifpb.firecorp.rest.dto.input;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import br.edu.ifpb.firecorp.domain.model.Sexo;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PessoaCadastroInput {
	
	@NotBlank
	private String nome;
	
	@NotBlank
	private String cpf;
	
	@NotBlank
	private String rg;
	
	@NotBlank
	private String orgaoExpedidor;
	
	private LocalDate dataNascimento;
	
	@NotNull
	private Sexo sexo;
	
	@NotBlank
	private String telefone;
	
	private EnderecoInput endereco;

}
