import { Component, OnInit } from '@angular/core';
import { EjercicioService } from '../../servicios/ejercicio.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.page.html',
  styleUrls: ['./ejercicios.page.scss'],
})
export class EjerciciosPage implements OnInit {  

  ejercicios = [] 

  constructor(private ejercicioService: EjercicioService, private router: Router, private alert: AlertController) { }

  ngOnInit() {
    this.ejercicioService.cargarEjercicios().subscribe(data =>{
      this.ejercicios = data;
    })
  } 

  ionViewWillEnter(){
    this.ejercicioService.cargarEjercicios().subscribe(data =>{
      this.ejercicios = data;
    })
  }


  agregarEjercicio(){
    this.router.navigate(['/ejerciciopost'])
  }

  async borrar (ejercicio, i){
    const id_ejercicios = `${ ejercicio.id_ejercicios }`;
    const alert = await this.alert.create(
      {
        header: 'Peligro!!',
        message: `Quieres eliminar el grupo de ejercicios con el id?<br><strong>${id_ejercicios}</strong></br>`,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (resp) =>{

            }
          },
          {
            text: 'Confirmar',
            handler: (resp) =>{
              this.ejercicioService.deleteEjercicio(ejercicio.id_ejercicios).subscribe(
                resp => {
                  console.log(resp);
                  this.ejercicios.splice(i,1);
                },
                err => console.log(err)
              );
            }
            
          }
        ]
      }
    );
    await alert.present();

  }
} 
