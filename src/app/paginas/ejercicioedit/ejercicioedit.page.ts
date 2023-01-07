import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { EjercicioM } from 'src/app/modelos/ejercicio.model';
import { EjercicioService } from 'src/app/servicios/ejercicio.service';

@Component({ 
  selector: 'app-ejercicioedit',
  templateUrl: './ejercicioedit.page.html',
  styleUrls: ['./ejercicioedit.page.scss'],
})
export class EjercicioeditPage implements OnInit {

  titulo='';
  id: any;
  ejeredi = new EjercicioM ('','','','',);
  constructor(private ejercicioService: EjercicioService, private router: Router, private route: ActivatedRoute, 
              private NavController:NavController, private alert: AlertController) { }

  ngOnInit() {

    this.route.paramMap.subscribe(paraMap => {
      const id = paraMap.get('id');
      this.ejercicioService.cargarEjercicio(id).subscribe( datos => {
        this.ejeredi = datos
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
    this.ejeredi.id_ejercicios
    peticion = this.ejercicioService.editarEjercicio(this.ejeredi);

    peticion.subscribe(
      resp => {
        this.ejeredi.id_ejercicios
          this.alerta('Editar Ejercicio', this.ejeredi.parte_superior, 'Modificacion Completada');

        this.router.navigate(['/ejercicios']);
      }
    )
  }
  }

