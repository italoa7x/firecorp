import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bombeiro } from './listagem/listagem.component';

@Injectable({
  providedIn: 'root',
})
export class BombeiroService {
  private BASE_URL = 'http://localhost:8080/bombeiros';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  async adicionar(bombeiro: any) {
    return this.http
      .post(this.BASE_URL, JSON.stringify(bombeiro), { headers: this.headers })
      .toPromise()
      .then();
  }

  async listar(): Promise<Bombeiro[]> {
    return this.http
      .get(this.BASE_URL)
      .toPromise<any>()
      .then((dados) => {
        let bombeiros = dados.map((dado) => {
          const bombeiro = {
            nome: dado.pessoa.nome,
            matricula: dado.matricula,
            telefone: dado.pessoa.telefone,
            patente: dado.tipoPatente,
            codigo: dado.id,
          };
          return bombeiro;
        });

        return bombeiros;
      });
  }

  atualizarBombeiro(bombeiro: Bombeiro): Observable<Bombeiro> {
    return this.http.put<Bombeiro>(this.BASE_URL, bombeiro);
  }

  buscarPorId(id: string): Observable<Bombeiro> {
    return this.http.get<Bombeiro>(`${this.BASE_URL}/${id}`);
  }
}
