import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EjercicioService } from 'src/app/servicios/ejercicio.service';
import { EjercicioM } from '../../modelos/ejercicio.model';

@Component({
  selector: 'app-ejercicioinfo',
  templateUrl: './ejercicioinfo.page.html',
  styleUrls: ['./ejercicioinfo.page.scss'],
})
export class EjercicioinfoPage implements OnInit {

  ejerci: EjercicioM

  constructor(private ejercicioService: EjercicioService, private router: Router,
              private activatedRoute: ActivatedRoute, http: HttpClient, private NavController: NavController ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.ejercicioService.cargarEjercicio(id).subscribe( datos =>{
        this.ejerci = datos;
        console.log(datos);
      })
    })
  } 
  
}
