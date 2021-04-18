package br.edu.ifpb.firecorp.domain.model;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Bombeiro {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private Long id;
	
	private String matricula;
	
	private Boolean ausente;
	
	@Enumerated(EnumType.ORDINAL)
	private TipoPatente tipoPatente;
	
	@OneToOne
	private Conta conta;
	
	@Embedded
	private Pessoa pessoa;

}
