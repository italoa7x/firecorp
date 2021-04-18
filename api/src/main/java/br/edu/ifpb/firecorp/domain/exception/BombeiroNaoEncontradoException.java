package br.edu.ifpb.firecorp.domain.exception;

public class BombeiroNaoEncontradoException extends EntidadeNaoEncontradaException {

	private static final long serialVersionUID = 1L;

	public BombeiroNaoEncontradoException(Long id) {
		super(String.format("O bombeiro com id %d não foi encontrado", id));
	}

}
