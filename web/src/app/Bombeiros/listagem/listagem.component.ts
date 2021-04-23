import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
})
export class ListagemComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'codigo',
    'nome',
    'matricula',
    'telefone',
    'patente',
  ];
  dataSource = new MatTableDataSource<Bombeiro>(BOMBEIROS_MOCK);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Bombeiro {
  nome: string;
  matricula: string;
  telefone: string;
  patente: string;
  codigo: number;
}

const BOMBEIROS_MOCK: Bombeiro[] = [
  {
    codigo: 1,
    nome: 'Joao',
    matricula: '1928391281',
    telefone: '(00) 0-0000-0000',
    patente: 'SOLDADO',
  },
  {
    codigo: 2,
    nome: 'Carlos',
    matricula: '234123421',
    telefone: '(00) 0-0000-0000',
    patente: 'MAJOR',
  },
  {
    codigo: 3,
    nome: 'Silveira',
    matricula: '7156313563',
    telefone: '(00) 0-0000-0000',
    patente: 'TENENTE',
  },
  {
    codigo: 4,
    nome: 'Neves',
    matricula: '7123471345',
    telefone: '(00) 0-0000-0000',
    patente: 'COMANDANTE',
  },
  {
    codigo: 5,
    nome: 'Jorge',
    matricula: '45271524',
    telefone: '(00) 0-0000-0000',
    patente: 'SOLDADO',
  },
  {
    codigo: 6,
    nome: 'Fernandes',
    matricula: '1023901293',
    telefone: '(00) 0-0000-0000',
    patente: 'SOLDADO',
  },
  {
    codigo: 7,
    nome: 'Fernandes',
    matricula: '1023901293',
    telefone: '(00) 0-0000-0000',
    patente: 'SOLDADO',
  },
  {
    codigo: 8,
    nome: 'Fernandes',
    matricula: '1023901293',
    telefone: '(00) 0-0000-0000',
    patente: 'SOLDADO',
  },
  {
    codigo: 9,
    nome: 'Fernandes',
    matricula: '1023901293',
    telefone: '(00) 0-0000-0000',
    patente: 'SOLDADO',
  },
  {
    codigo: 10,
    nome: 'Fernandes',
    matricula: '1023901293',
    telefone: '(00) 0-0000-0000',
    patente: 'SOLDADO',
  },
];
