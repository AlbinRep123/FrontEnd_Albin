import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanAlimentosM } from '../modelos/planAlimentos.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanalimentosService {

  path = `${environment.url}/planAlimentacion`;

  //url = 'http://localhost:8080/api/planAlimentacion/'

  constructor(private http: HttpClient) { } 

  cargarPlanAlimentacion(): Observable<any> { 
    return this.http.get<any>(this.path)
  } 

  cargarPlanAlimentos(id_plan_alimentacion:string): Observable<any>{
    return this.http.get(`${this.path}/buscar/${id_plan_alimentacion}`)
  }


  agregarPlanAlimentacion(planAlimentos:PlanAlimentosM): Observable<PlanAlimentosM>{
    return this.http.post<PlanAlimentosM>(`${this.path}/create`,planAlimentos)
  }

  deletePlanAlimentacion(id_plan_alimentacion): Observable<PlanAlimentosM>{
    return this.http.delete<PlanAlimentosM>(`${this.path}/delete/${id_plan_alimentacion}`);
  }

  editarPlanAlimentacion(planAlimentos:PlanAlimentosM): Observable<PlanAlimentosM>{
    return this.http.put<PlanAlimentosM>(`${this.path}/update/${planAlimentos.id_plan_alimentacion}`,planAlimentos)
  } 

}
 