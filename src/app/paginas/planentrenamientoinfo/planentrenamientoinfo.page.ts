import { Component, OnInit } from '@angular/core';
import { PlanentrenaService } from 'src/app/servicios/planentrena.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { PlanEntrenaM } from 'src/app/modelos/planEntrena.model';

@Component({
  selector: 'app-planentrenamientoinfo',
  templateUrl: './planentrenamientoinfo.page.html',
  styleUrls: ['./planentrenamientoinfo.page.scss'],
})
export class PlanentrenamientoinfoPage implements OnInit {

  planentre: PlanEntrenaM

  constructor(private planentrenaService: PlanentrenaService, private router: Router,
              private activatedRoute: ActivatedRoute, http: HttpClient, private NavController: NavController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.planentrenaService.cargarPlanEntrena(id).subscribe( datos =>{
        this.planentre = datos;
        console.log(datos);
      })
    })
  } 

}
