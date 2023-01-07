import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PlanalimentosService } from 'src/app/servicios/planalimentos.service';

 
@Component({
  selector: 'app-planalimentacion',
  templateUrl: './planalimentacion.page.html',
  styleUrls: ['./planalimentacion.page.scss'],
})
export class PlanalimentacionPage implements OnInit { 

  planalimentacion = []

  constructor(private planalimentosService: PlanalimentosService, private router: Router, private alert: AlertController) { }

  ngOnInit() {
  this.planalimentosService.cargarPlanAlimentacion().subscribe(data =>{
  this.planalimentacion = data;
    })
  }

  ionViewWillEnter(){
    this.planalimentosService.cargarPlanAlimentacion().subscribe(data =>{
      this.planalimentacion = data;
    })
  }

  agregarPlanAlimentacion(){
    this.router.navigate(['/planalimentacionpost'])
  }

  async borrar (alimentos, i){
    const id_plan_alimentacion = `${ alimentos.id_plan_alimentacion }`;
    const alert = await this.alert.create(
      {
        header: 'Peligro!!',
        message: `Quieres eliminar el Plan de alimentacion con el id?<br><strong>${id_plan_alimentacion}</strong></br>`,
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
              this.planalimentosService.deletePlanAlimentacion(alimentos.id_plan_alimentacion).subscribe(
                resp => {
                  console.log(resp);
                  this.planalimentacion.splice(i,1);
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
 