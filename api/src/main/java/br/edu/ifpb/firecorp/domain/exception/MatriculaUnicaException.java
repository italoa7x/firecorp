package br.edu.ifpb.firecorp.domain.exception;

public class MatriculaUnicaException extends RegraNegocioException {

	private static final long serialVersionUID = 1L;

	public MatriculaUnicaException(String matricula) {
		super(String.format("A matrícula %s esta em uso", matricula));
	}

}
