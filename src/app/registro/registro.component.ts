import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  constructor(private http: HttpClient,
    private router: Router){
  }

  enviar( f:NgForm ) {
    //validamos los campos que lleguen
    console.log('nombre', f.form.value.nombre);
    console.log('apellido', f.form.value.apellido);
    console.log('correo', f.form.value.correo);
    console.log('contrasena', f.form.value.contrasena);

    let url_registro = 'http://localhost:8000/api/usuarios/registrar';
    this.http.post(url_registro,{
      'nombre' : f.form.value.nombre,
      'apellido' : f.form.value.apellido,
      'correo' : f.form.value.correo,
      'contrasena':f.form.value.contrasena,
      'fecha_nacimiento':f.form.value.fecha_nacimiento,
      'telefono':f.form.value.telefono,
      'plata':f.form.value.plata,
      'ciudad':f.form.value.ciudad,
      'yape':f.form.value.yape,
      'plin':f.form.value.plin,
      'genero':f.form.value.genero 			 	
    }).subscribe(
      (data : any) => {
        console.log(data);
        alert('se registro correctamente');
          this.router.navigateByUrl('/');
        }  
    )
  }
}
