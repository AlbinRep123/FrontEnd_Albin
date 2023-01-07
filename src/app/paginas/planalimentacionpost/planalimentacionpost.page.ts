import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanAlimentosM } from 'src/app/modelos/planAlimentos.model';
import { PlanalimentosService } from 'src/app/servicios/planalimentos.service';

@Component({
  selector: 'app-planalimentacionpost',
  templateUrl: './planalimentacionpost.page.html',
  styleUrls: ['./planalimentacionpost.page.scss'], 
})
export class PlanalimentacionpostPage implements OnInit {

  constructor(private planalimentosService: PlanalimentosService, private router: Router) { }

  ngOnInit() {
  }

  agregarNuevoPlanAlimentacion(id_plan_alimentacion, tipos_de_comidas_semana, cantidad_de_comidas_semana){
    const ALBIN : PlanAlimentosM = {
      id_plan_alimentacion: id_plan_alimentacion.value,
      tipos_de_comidas_semana: tipos_de_comidas_semana.value,
      cantidad_de_comidas_semana: cantidad_de_comidas_semana.value
      
    }
    this.planalimentosService.agregarPlanAlimentacion(ALBIN).subscribe(data =>{
      this.router.navigate([`/planalimentacion`])
    })
  } 

}
