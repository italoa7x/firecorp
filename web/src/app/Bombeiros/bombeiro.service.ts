import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bombeiro } from './listagem/listagem.component';

@Injectable({
  providedIn: 'root'
})
export class BombeiroService {

  constructor(private http: HttpClient) { }

  async adicionar(bombeiro: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      });
    return this.http.post('http://localhost:8080/bombeiros', JSON.stringify(bombeiro), {headers}).toPromise().then();
  }

  async listar(): Promise<Bombeiro[]> {
    return this.http.get('http://localhost:8080/bombeiros').toPromise<any>().then(dados => {
      let bombeiros = dados.map(dado => {
        const bombeiro = {
          nome: dado.pessoa.nome,
          matricula: dado.matricula,
          telefone: dado.pessoa.telefone,
          patente: dado.tipoPatente,
          codigo: dado.id
        }
        return bombeiro
      })

      return bombeiros
    });
  }
}
