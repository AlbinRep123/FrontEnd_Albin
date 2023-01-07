import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { PlanAlimentosM } from 'src/app/modelos/planAlimentos.model';
import { PlanalimentosService } from 'src/app/servicios/planalimentos.service';

@Component({
  selector: 'app-planalimentacionedit',
  templateUrl: './planalimentacionedit.page.html',
  styleUrls: ['./planalimentacionedit.page.scss'],
})
export class PlanalimentacioneditPage implements OnInit {

  titulo='';
  id: any;
  planaliedit = new PlanAlimentosM ('','','',);
  constructor(private planalimentosService: PlanalimentosService, private router: Router, private route: ActivatedRoute, 
              private NavController:NavController, private alert: AlertController) { }

  ngOnInit() {

    this.route.paramMap.subscribe(paraMap => {
      const id = paraMap.get('id');
      this.planalimentosService.cargarPlanAlimentos(id).subscribe( datos => {
        this.planaliedit = datos
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
    this.planaliedit.id_plan_alimentacion
    peticion = this.planalimentosService.editarPlanAlimentacion(this.planaliedit);

    peticion.subscribe(
      resp => {
        this.planaliedit.id_plan_alimentacion
          this.alerta('Editar Plan de alimentacion', this.planaliedit.id_plan_alimentacion, 'Modificacion Completada');

        this.router.navigate(['/planalimentacion']);
      }
    )
  } 
  } 
 