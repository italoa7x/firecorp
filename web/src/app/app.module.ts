import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './Bombeiros/cadastro/cadastro.component';
import { ListagemComponent } from './Bombeiros/listagem/listagem.component';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
const ngWizardConfig: NgWizardConfig = {
  theme: THEME.circles
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    ListagemComponent,

  ],
  imports: [
    NgWizardModule.forRoot(ngWizardConfig),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
