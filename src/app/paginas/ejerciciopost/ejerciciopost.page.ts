import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EjercicioM } from '../../modelos/ejercicio.model';
import { EjercicioService } from '../../servicios/ejercicio.service';

@Component({
  selector: 'app-ejerciciopost',
  templateUrl: './ejerciciopost.page.html',
  styleUrls: ['./ejerciciopost.page.scss'], 
})
export class EjerciciopostPage implements OnInit {
 
  constructor(private ejercicioService: EjercicioService, private router: Router ) { }

  ngOnInit() {
  }

  agregarNuevoEjercicio(id_ejercicios, parte_superior, parte_media, parte_inferior){
    const ALBIN : EjercicioM = {
      id_ejercicios: id_ejercicios.value,
      parte_superior: parte_superior.value,
      parte_media: parte_media.value,
      parte_inferior: parte_inferior.value

    }
    this.ejercicioService.agregarEjercicio(ALBIN).subscribe(data =>{
      this.router.navigate([`/ejercicios`])
    })
  } 

}
 