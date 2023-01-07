import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { UsuarioM } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-usuariosedit',
  templateUrl: './usuariosedit.page.html',
  styleUrls: ['./usuariosedit.page.scss'],
})
export class UsuarioseditPage implements OnInit {

  titulo=''; 
  id: any;
  usuaedit = new UsuarioM ('','','','','','','','',);
  constructor(private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute, 
              private NavController:NavController, private alert: AlertController) { }

  ngOnInit() {

    this.route.paramMap.subscribe(paraMap => {
      const id = paraMap.get('id');
      this.usuarioService.cargarUsuario(id).subscribe( datos => {
        this.usuaedit = datos
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
    this.usuaedit.id_usuarios
    peticion = this.usuarioService.editarUsuario(this.usuaedit);

    peticion.subscribe(
      resp => {
        this.usuaedit.id_usuarios
          this.alerta('Editar Usuario', this.usuaedit.nombres, 'Modificacion Completada');

        this.router.navigate(['/usuarios']);
      }
    )
  }
  }
  