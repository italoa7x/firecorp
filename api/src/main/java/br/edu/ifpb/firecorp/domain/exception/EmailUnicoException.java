package br.edu.ifpb.firecorp.domain.exception;

public class EmailUnicoException extends RegraNegocioException {

	private static final long serialVersionUID = 1L;

	public EmailUnicoException(String email) {
		super(String.format("O e-mail %s esta em uso", email));
	}

}
