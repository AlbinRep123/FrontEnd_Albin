import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlanAlimentosM } from 'src/app/modelos/planAlimentos.model';
import { PlanalimentosService } from 'src/app/servicios/planalimentos.service';

@Component({
  selector: 'app-planalimentacioninfo',
  templateUrl: './planalimentacioninfo.page.html',
  styleUrls: ['./planalimentacioninfo.page.scss'],
})
export class PlanalimentacioninfoPage implements OnInit {

  planali: PlanAlimentosM

  constructor(private planalimentosService: PlanalimentosService, private router: Router,
              private activatedRoute: ActivatedRoute, http: HttpClient, private NavController: NavController ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.planalimentosService.cargarPlanAlimentos(id).subscribe( datos =>{
        this.planali = datos;
        console.log(datos);
      })
    }) 
  }

}
