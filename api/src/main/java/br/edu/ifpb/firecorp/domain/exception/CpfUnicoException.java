package br.edu.ifpb.firecorp.domain.exception;

public class CpfUnicoException extends RegraNegocioException {

	private static final long serialVersionUID = 1L;

	public CpfUnicoException(String cpf) {
		super(String.format("O CPF %s esta em uso", cpf));
	}

}
