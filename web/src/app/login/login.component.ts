import { Component, OnInit } from '@angular/core';
import { AlertaService } from '../shared/alerta.service';
import { AutenticacaoService } from './autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private autenticacaoService: AutenticacaoService, private alertaService: AlertaService) { }

  ngOnInit(): void {
  }

  autenticar(email: string, senha: string) {
    this.autenticacaoService.obterAutenticacao(email, senha).then(() => {
      this.alertaService.sucesso('Autenticado');
    }).catch(() => this.alertaService.erro('Email e/ou senha incorreto'));
  }

}
