package br.edu.ifpb.firecorp.domain.exception;

public class RgUnicoException extends RegraNegocioException {

	private static final long serialVersionUID = 1L;

	public RgUnicoException(String rg) {
		super(String.format("O RG %s esta em uso", rg));
	}

}
