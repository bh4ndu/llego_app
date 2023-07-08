import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent {

  public evento : any = {
    nombre : '',
    direccion : '' 
  }

  constructor (private http: HttpClient,
      private route : ActivatedRoute) {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    let url_evento = 'http://localhost:8000/api/eventos/detalle/'+id;
    this.http.get(url_evento).subscribe(
      (data : any) => {
        console.log(data);
        this.evento = data;
      }
    )
  }

}
