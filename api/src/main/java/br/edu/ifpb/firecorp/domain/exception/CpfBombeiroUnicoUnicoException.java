package br.edu.ifpb.firecorp.domain.exception;

public class CpfBombeiroUnicoUnicoException extends RegraNegocioException {

	private static final long serialVersionUID = 1L;

	public CpfBombeiroUnicoUnicoException(String cpf) {
		super(String.format("O CPF %s esta em uso", cpf));
	}

}
