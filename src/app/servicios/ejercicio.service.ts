import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EjercicioM } from '../modelos/ejercicio.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService { 

  path = `${environment.url}/ejercicios`; 

  //url = 'http://localhost:8080/api/ejercicios/' 

  constructor(private http: HttpClient) { }

  cargarEjercicios(): Observable<any> {
    return this.http.get<any>(this.path)
  } 

  cargarEjercicio(id_ejercicios:string): Observable<any>{
    return this.http.get(`${this.path}/buscar/${id_ejercicios}`)
  }

  agregarEjercicio(ejercicio:EjercicioM): Observable<EjercicioM>{
    return this.http.post<EjercicioM>(`${this.path}/create`,ejercicio)
  }

  deleteEjercicio(id_ejercicios): Observable<EjercicioM>{
    return this.http.delete<EjercicioM>(`${this.path}/delete/${id_ejercicios}`);
  } 

  editarEjercicio(ejercicio:EjercicioM): Observable<EjercicioM>{
    return this.http.put<EjercicioM>(`${this.path}/update/${ejercicio.id_ejercicios}`,ejercicio)
  } 
 

}
  