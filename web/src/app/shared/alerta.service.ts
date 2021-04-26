import { Component, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AlertaService {
  constructor(private snackBar: MatSnackBar) {}

  erro(mensagem: string) {
    this.snackBar.open('[ERRO] ' + mensagem, null, {
      duration: 1000 * 7,
    });
  }

  sucesso(mensagem: string) {
    this.snackBar.open('[SUCESSO] ' + mensagem, null, {
      duration: 1000 * 7,
    });
  }

  errorHandler(error: any) {
    error.error.forEach((item) => {
      this.erro(item.descricao);
    });
  }
}
