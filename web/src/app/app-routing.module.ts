import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BombeirosRouting } from './Bombeiros/bombeiro-routing.module';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BombeirosRouting
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
