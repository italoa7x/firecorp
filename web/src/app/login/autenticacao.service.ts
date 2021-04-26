import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(private http: HttpClient) {}

  async obterAutenticacao(email: string, senha: string) {
    const headers = new HttpHeaders({
      Authorization: 'Basic d2ViOjM1ODU0QFNtMjM4JDQ3NGRz',
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const body = `username=${email}&password=${senha}&grant_type=password`;

    return this.http
      .post('http://localhost:8080/oauth/token', body, { headers, withCredentials: true })
      .toPromise();
  }
}
