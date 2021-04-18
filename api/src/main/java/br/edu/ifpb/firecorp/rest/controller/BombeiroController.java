package br.edu.ifpb.firecorp.rest.controller;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifpb.firecorp.domain.model.Bombeiro;
import br.edu.ifpb.firecorp.domain.service.BombeiroService;
import br.edu.ifpb.firecorp.rest.dto.input.BombeiroCadastroInput;
import br.edu.ifpb.firecorp.rest.dto.input.BombeiroInput;
import br.edu.ifpb.firecorp.rest.dto.output.BombeiroOutput;

@RestController
@RequestMapping("/bombeiros")
public class BombeiroController {
	
	@Autowired
	private BombeiroService bombeiroService;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public BombeiroOutput adicionar(@RequestBody @Valid BombeiroCadastroInput bombeiroCadastroInput) {
		Bombeiro bombeiro = mapearParaDominio(bombeiroCadastroInput);
		bombeiro = bombeiroService.salvar(bombeiro);
		
		return mapearParaDtoOutput(bombeiro);
	}
	
	@PutMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public BombeiroOutput atualizar(@PathVariable Long id, @RequestBody @Valid BombeiroInput bombeiroInput) {
		Bombeiro bombeiro = bombeiroService.buscar(id);
		modelMapper.map(bombeiroInput, bombeiro);
		bombeiro = bombeiroService.salvar(bombeiro);
		
		return mapearParaDtoOutput(bombeiro);
	}
	
	@GetMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public BombeiroOutput buscar(@PathVariable Long id) {
		Bombeiro bombeiro = bombeiroService.buscar(id);
		
		return mapearParaDtoOutput(bombeiro);
	}
	
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<BombeiroOutput> listar() {
		List<Bombeiro> bombeiros = bombeiroService.listar();
		
		return bombeiros.stream().map(a -> mapearParaDtoOutput(a)).collect(Collectors.toList());
	}
	
	private Bombeiro mapearParaDominio(BombeiroCadastroInput bombeiroCadastroInput) {
		return modelMapper.map(bombeiroCadastroInput, Bombeiro.class);
	}
	
	private BombeiroOutput mapearParaDtoOutput(Bombeiro bombeiro) {
		return modelMapper.map(bombeiro, BombeiroOutput.class);
	}

}
