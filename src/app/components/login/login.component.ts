import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //irá receber o valor email e senha informados na tela de login
  creds: Credenciais = {
    email: '',
    senha: ''
  }

  // validação dos campos senha e email
  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));



  constructor(private toast: ToastrService){}

  logar(){
    this.toast.error('Usuário e/ou senha inválidos!', 'Login');
    this.creds.senha = '';
  }

  ngOnInit(): void {
   
  }

  //método para habilitar botão somente quando for digitado email e senha
  validaCampos(): boolean{
    if(this.email.valid && this.senha.valid){
      return true;
    }else{
      return false;
    }
  }

}
