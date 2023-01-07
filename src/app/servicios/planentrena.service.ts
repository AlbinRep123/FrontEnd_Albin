import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanEntrenaM } from '../modelos/planEntrena.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanentrenaService {

  path = `${environment.url}/planEntrenamiento`;

 // url = 'http://localhost:8080/api/planEntrenamiento/'

  constructor(private http: HttpClient) { }

  cargarPlanEntrenamiento(): Observable<any> {
    return this.http.get<any>(this.path)
  }  

  cargarPlanEntrena(id_ejercicios:string): Observable<any>{
    return this.http.get(`${this.path}/buscar/${id_ejercicios}`)
  }
 

  agregarPlanEntrenamiento(planEntrenamiento:PlanEntrenaM): Observable<PlanEntrenaM>{
    return this.http.post<PlanEntrenaM>(`${this.path}/create`,planEntrenamiento)
  }


  deletePlanEntrenamiento(id_plan_entrenamiento): Observable<PlanEntrenaM>{
    return this.http.delete<PlanEntrenaM>(`${this.path}/delete/${id_plan_entrenamiento}`);
  }

  editarPlanEntrenamiento(planEntrenamiento:PlanEntrenaM): Observable<PlanEntrenaM>{
    return this.http.put<PlanEntrenaM>(`${this.path}/update/${planEntrenamiento.id_plan_entrenamiento}`,planEntrenamiento)
  } 
} 