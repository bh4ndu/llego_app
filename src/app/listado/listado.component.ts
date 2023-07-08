import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

public eventos : any;

  constructor (private http: HttpClient) {
    let url_eventos = 'http://localhost:8000/api/eventos/listar';
    this.http.get(url_eventos).subscribe(
      (data : any) => {
        this.eventos = data;
      }
    )
  }
  
  
}
