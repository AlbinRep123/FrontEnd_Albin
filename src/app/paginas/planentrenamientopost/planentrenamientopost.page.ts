import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanEntrenaM } from 'src/app/modelos/planEntrena.model';
import { PlanentrenaService } from 'src/app/servicios/planentrena.service';

@Component({
  selector: 'app-planentrenamientopost',
  templateUrl: './planentrenamientopost.page.html',
  styleUrls: ['./planentrenamientopost.page.scss'],
})
export class PlanentrenamientopostPage implements OnInit {

  constructor(private planentrenaService: PlanentrenaService, private router: Router) { }

  ngOnInit() {
  }

  agregarNuevoPlanEntrenamiento(id_plan_entrenamiento, tipo_de_complexion, horas_de_entrenamiento_semana, id_ejerci, id_alimen){
    const ALBIN : PlanEntrenaM = {
      id_plan_entrenamiento: id_plan_entrenamiento.value,
      tipo_de_complexion: tipo_de_complexion.value,
      horas_de_entrenamiento_semana: horas_de_entrenamiento_semana.value,
      id_ejerci: id_ejerci.value,
      id_alimen: id_alimen.value
      
    }
    this.planentrenaService.agregarPlanEntrenamiento(ALBIN).subscribe(data =>{
      this.router.navigate([`/planentrenamiento`])
    })
  } 

}
