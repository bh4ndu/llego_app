import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private http: HttpClient,
    private router: Router){
  }

  enviar( f:NgForm ) {
    console.log('login', f.form.value.login)
    console.log('contrasena', f.form.value.contrasena)
    return;

    let url_login = 'http://localhost:8000/api/usuarios/login';
    this.http.post(url_login,{
      'correo' : f.form.value.login,
      'contrasena' : f.form.value.contrasena
    }).subscribe(
      (data : any) => {
        console.log(data);
        if (data === 0) {
          alert("el usuario y/o contraseña no existe");
        } else {
          alert("login correcto!")
          this.router.navigateByUrl('/listado');
        }
      }
    )
  }
  
}
