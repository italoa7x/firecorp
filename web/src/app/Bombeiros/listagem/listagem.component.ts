import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { BombeiroService } from '../bombeiro.service';
import { NavbarService } from '../../navbar/navbar.service';

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
    'acao',
  ];

  dataSource: any;

  bombeiros: Bombeiro[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private bombeiroService: BombeiroService,
    private router: Router,
    private activatRoute: ActivatedRoute,
    public nav: NavbarService
  ) {}
  ngOnInit(): void {
    this.listar();
    this.nav.show();
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  listar() {
    this.bombeiroService.listar().then((bombeiros) => {
      this.bombeiros = bombeiros;
      this.carregarTabela();
    });
  }

  atualizar(codigo: string) {
    this.router.navigate(['bombeiros', codigo], {
      relativeTo: this.activatRoute,
    });
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
