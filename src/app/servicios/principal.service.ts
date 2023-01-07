import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../modelos/componente.interface';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor( private http: HttpClient) { }

  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getUsuarios() {
    return this.http.get('http://jsonplaceholder.typicode.com/usuarios');
  }


}
