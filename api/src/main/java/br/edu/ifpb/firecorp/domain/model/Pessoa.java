package br.edu.ifpb.firecorp.domain.model;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class Pessoa {
	
	private String nome;
	
	private String cpf;
	
	private String rg;
	
	private String orgaoExpedidor;
	
	private LocalDate dataNascimento;
	
	@Enumerated(EnumType.ORDINAL)
	private Sexo sexo;
	
	private String telefone;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Endereco endereco;

}
