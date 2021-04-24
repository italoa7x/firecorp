import { OnInit } from '@angular/core';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BombeiroService } from '../bombeiro.service';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
})
export class ListagemComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'codigo',
    'nome',
    'matricula',
    'telefone',
    'patente',
  ];


  dataSource: any;

  bombeiros: Bombeiro[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private bombeiroService: BombeiroService) {
  }
  ngOnInit(): void {
    this.listar();
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  listar() {
    this.bombeiroService.listar().then(bombeiros => {
      this.bombeiros = bombeiros;
      this.carregarTabela();
    })
  }

  carregarTabela() {
    this.dataSource = new MatTableDataSource<Bombeiro>(this.bombeiros);
  }

}

export interface Bombeiro {
  nome: string;
  matricula: string;
  telefone: string;
  patente: string;
  codigo: number;
}