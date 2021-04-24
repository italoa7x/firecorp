import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BombeiroService } from '../bombeiro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthrFormGroup: FormGroup;

  bombeiro = new BombeiroInput();

  atualizaBombeiro$ = false;
  codigoBombeiro = null;

  constructor(
    private _formBuilder: FormBuilder,
    private bombeiroService: BombeiroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const id = params['id'];
      const bombeiroEncontrado$ = this.bombeiroService.buscarPorId(id);
      this.codigoBombeiro = id;
      bombeiroEncontrado$.subscribe((resultado) => {
        this.atualizarFormulario(resultado);
        this.atualizaBombeiro$ = true;
      });
    });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrlNome: ['', Validators.required],
      firstCtrlData: ['', Validators.required],
      firstCtrlRG: ['', Validators.required],
      firstCtrlFone: ['', Validators.required],
      firstCtrlCPF: ['', Validators.required],
      firstCtrlExpedidor: ['', Validators.required],
      firstCtrlSexo: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrlMatricula: ['', Validators.required],
      secondCtrlBatalhao: ['', Validators.required],
      secondCtrlEspecialidade: ['', Validators.required],
      secondCtrlPatente: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrlEmail: ['', Validators.required],
      thirdCtrlSenha: ['', Validators.required],
      thirdCtrlConfirmSenha: ['', Validators.required],
    });

    this.fourthrFormGroup = this._formBuilder.group({
      fourthCtrlRua: ['', Validators.required],
      fourthCtrlNumero: ['', Validators.required],
      fourthCtrlCep: ['', Validators.required],
      fourthCtrlDescricao: [''],
      fourthCtrlComplemento: [''],
      fourthCtrlReferencia: [''],
    });
  }

  private atualizarFormulario(bombeiroParaAtualizar: any) {
    const { conta, pessoa } = bombeiroParaAtualizar;
    const { endereco } = pessoa;
    this.firstFormGroup.patchValue({
      firstCtrlNome: pessoa.nome,
      firstCtrlData: pessoa.dataNascimento,
      firstCtrlRG: pessoa.rg,
      firstCtrlFone: pessoa.telefone,
      firstCtrlCPF: pessoa.cpf,
      firstCtrlExpedidor: pessoa.orgaoExpedidor,
      firstCtrlSexo: pessoa.sexo,
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrlMatricula: bombeiroParaAtualizar.matricula,
      secondCtrlBatalhao: bombeiroParaAtualizar.batalhao,
      secondCtrlEspecialidade: bombeiroParaAtualizar.especialidade,
      secondCtrlPatente: bombeiroParaAtualizar.tipoPatente,
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrlEmail: conta.email,
      thirdCtrlSenha: conta.senha,
      thirdCtrlConfirmSenha: conta.senha,
    });

    this.fourthrFormGroup = this._formBuilder.group({
      fourthCtrlRua: endereco.rua,
      fourthCtrlNumero: endereco.numero,
      fourthCtrlCep: endereco.cep,
      fourthCtrlDescricao: endereco.descricao,
      fourthCtrlComplemento: endereco.complemento,
      fourthCtrlReferencia: endereco.referencia,
    });
  }

  adicionar() {
    const dadosPessoais = this.firstFormGroup.value;
    const dadosProfissao = this.secondFormGroup.value;
    const dadosEndereco = this.fourthrFormGroup.value;
    const dadosConta = this.thirdFormGroup.value;

    this.bombeiro.pessoa.nome = dadosPessoais.firstCtrlNome;
    this.bombeiro.pessoa.dataNascimento = dadosPessoais.firstCtrlData;
    this.bombeiro.pessoa.rg = dadosPessoais.firstCtrlRG;
    this.bombeiro.pessoa.telefone = dadosPessoais.firstCtrlFone;
    this.bombeiro.pessoa.cpf = dadosPessoais.firstCtrlCPF;
    this.bombeiro.pessoa.orgaoExpedidor = dadosPessoais.firstCtrlExpedidor;
    this.bombeiro.pessoa.sexo = dadosPessoais.firstCtrlSexo;

    this.bombeiro.matricula = dadosProfissao.secondCtrlMatricula;
    this.bombeiro.tipoPatente = dadosProfissao.secondCtrlPatente;

    this.bombeiro.pessoa.endereco.rua = dadosEndereco.fourthCtrlRua;
    this.bombeiro.pessoa.endereco.numero = dadosEndereco.fourthCtrlNumero;
    this.bombeiro.pessoa.endereco.cep = dadosEndereco.fourthCtrlCep;
    this.bombeiro.pessoa.endereco.descricao = dadosEndereco.fourthCtrlDescricao;
    this.bombeiro.pessoa.endereco.complemento =
      dadosEndereco.fourthCtrlComplemento;
    this.bombeiro.pessoa.endereco.referencia =
      dadosEndereco.fourthCtrlReferencia;

    this.bombeiro.conta.email = dadosConta.thirdCtrlEmail;
    this.bombeiro.conta.senha = dadosConta.thirdCtrlSenha;

    console.log(this.bombeiro);

    const resultado = this.atualizaBombeiro$
      ? this.bombeiroService.atualizar(this.bombeiro, this.codigoBombeiro)
      : this.bombeiroService.adicionar(this.bombeiro);
    if (resultado) {
      this.router.navigate(['bombeiros/listar']);
    }
  }
}

export class BombeiroInput {
  matricula: string;
  tipoPatente: string;
  conta = new ContaInput();
  pessoa = new PessoaInput();
}

export class ContaInput {
  email: string;
  senha: string;
}

export class PessoaInput {
  nome: string;
  cpf: string;
  rg: string;
  orgaoExpedidor: string;
  sexo: string;
  telefone: string;
  dataNascimento: Date;
  endereco = new EnderecoInput();
}

export class EnderecoInput {
  rua: string;
  numero: number;
  cep: string;
  descricao: string;
  complemento: string;
  referencia: string;
}
