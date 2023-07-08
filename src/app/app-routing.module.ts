import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ListadoComponent } from './listado/listado.component';
import { RegistroComponent } from './registro/registro.component';
import { EventoComponent } from './evento/evento.component';


const routes: Routes = [
  {path : '', component: LoginComponent},
  {path : 'listado', component: ListadoComponent},
  {path : 'registro', component: RegistroComponent},
  {path : 'evento/:id', component: EventoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
