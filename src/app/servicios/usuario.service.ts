import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioM } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  path = `${environment.url}/usuarios`;

  //url = 'http://localhost:8080/api/usuarios/'

  constructor(private http: HttpClient) { }

  cargarUsuarios(): Observable<any> {
    return this.http.get<any>(this.path)
  } 

  cargarUsuario(id_usuarios:string): Observable<any>{
    return this.http.get(`${this.path}/buscar/${id_usuarios}`)
  }


  agregarUsuario(usuario:UsuarioM): Observable<UsuarioM>{
    return this.http.post<UsuarioM>(`${this.path}/create`,usuario)
  }

  deleteUsuario(id_usuarios): Observable<UsuarioM>{
    return this.http.delete<UsuarioM>(`${this.path}/delete/${id_usuarios}`);
  } 

  editarUsuario(usuario:UsuarioM): Observable<UsuarioM>{
    return this.http.put<UsuarioM>(`${this.path}/update/${usuario.id_usuarios}`,usuario)
  } 
 
} 