import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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



  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router){}

    ngOnInit(): void {}

  logar(){
    
      this.service.authenticate(this.creds).subscribe(resposta => {
        this.service.successfulLogin(resposta.headers.get('Authorization').substring(7))
        this.router.navigate([''])
      }, () => {
        this.toast.error('Usuário e/ou senha inválidos');
      })
     
      }

     

  //método para habilitar botão somente quando for digitado email e senha
  validaCampos(): boolean{
    return this.email.valid && this.senha.valid
  
  }

}
