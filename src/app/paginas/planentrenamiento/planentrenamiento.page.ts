import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PlanentrenaService } from 'src/app/servicios/planentrena.service';

@Component({
  selector: 'app-planentrenamiento',
  templateUrl: './planentrenamiento.page.html',
  styleUrls: ['./planentrenamiento.page.scss'],
})
export class PlanentrenamientoPage implements OnInit {

  planentrenamiento = []

  constructor(private planentrenaService: PlanentrenaService, private router: Router, private alert: AlertController) { }

  ngOnInit() {
    this.planentrenaService.cargarPlanEntrenamiento().subscribe(data =>{
      this.planentrenamiento = data;
    })
  }


  ionViewWillEnter(){
    this.planentrenaService.cargarPlanEntrenamiento().subscribe(data =>{
      this.planentrenamiento = data;
    })
  }

  agregarPlanEntrenamiento(){
    this.router.navigate(['/planentrenamientopost'])
  }

  async borrar (entrenamientos, i){
    const id_plan_entrenamiento = `${ entrenamientos.id_plan_entrenamiento }`;
    const alert = await this.alert.create(
      {
        header: 'Peligro!!',
        message: `Quieres eliminar el Plan de entrenamiento con el id?<br><strong>${id_plan_entrenamiento}</strong></br>`,
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
              this.planentrenaService.deletePlanEntrenamiento(entrenamientos.id_plan_entrenamiento).subscribe(
                resp => {
                  console.log(resp);
                  this.planentrenamiento.splice(i,1);
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
