import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { PlanEntrenaM } from 'src/app/modelos/planEntrena.model';
import { PlanentrenaService } from 'src/app/servicios/planentrena.service';

@Component({
  selector: 'app-planentrenamientoedit',
  templateUrl: './planentrenamientoedit.page.html',
  styleUrls: ['./planentrenamientoedit.page.scss'],
})
export class PlanentrenamientoeditPage implements OnInit {

  titulo='';
  id: any;
  planentredit = new PlanEntrenaM ('','','','','',);
  constructor(private planentrenaService: PlanentrenaService, private router: Router, private route: ActivatedRoute, 
              private NavController:NavController, private alert: AlertController) { }

  ngOnInit() {

    this.route.paramMap.subscribe(paraMap => {
      const id = paraMap.get('id');
      this.planentrenaService.cargarPlanEntrena(id).subscribe( datos => {
        this.planentredit = datos
      })
    })
  }
    async alerta (titulo: string, subtitulo: string, mensaje:string){
      const alert = await this.alert.create({
        header: titulo,
        subHeader:subtitulo,
        message: mensaje,
        buttons: ['OK']
      });
      await alert.present();
    }

  guardar(){
    let peticion: Observable<any>;
    this.planentredit.id_plan_entrenamiento
    peticion = this.planentrenaService.editarPlanEntrenamiento(this.planentredit);

    peticion.subscribe(
      resp => {
        this.planentredit.id_plan_entrenamiento
          this.alerta('Editar Plan Entrenamiento', this.planentredit.tipo_de_complexion, 'Modificacion Completada');

        this.router.navigate(['/planentrenamiento']);
      }
    )
  }
  }
 
