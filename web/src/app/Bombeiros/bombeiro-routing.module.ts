import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

const routes: Routes = [
    { path: 'bombeiros/listar', component: ListagemComponent },
    { path: 'bombeiros', component: CadastroComponent },
    { path: 'bombeiros/:id', component: CadastroComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BombeirosRouting { }
