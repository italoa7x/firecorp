import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthrFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrlNome: ['', Validators.required],
      firstCtrlData: ['', Validators.required],
      firstCtrlRG: ['', Validators.required],
      firstCtrlFone: ['', Validators.required],
      firstCtrlCPF: ['', Validators.required],
      firstCtrlExpedidor: ['', Validators.required],
      firstCtrlSexo: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrlMatricula: ['', Validators.required],
      secondCtrlBatalhao: ['', Validators.required],
      secondCtrlEspecialidade: ['', Validators.required],
      secondCtrlPatente: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrlEmail: ['', Validators.required, Validators.email],
      thirdCtrlSenha: ['', Validators.required],
      thirdCtrlConfirmSenha: ['', Validators.required],
    });

    this.fourthrFormGroup = this._formBuilder.group({
      fourthCtrlRua: ['', Validators.required],
      fourthCtrlNumero: ['', Validators.required],
      fourthCtrlCep: ['', Validators.required],
      fourthCtrlDescricao: [''],
      fourthCtrlComplemento: [''],
      fourthCtrlReferencia: [''],
    });
  }
}
