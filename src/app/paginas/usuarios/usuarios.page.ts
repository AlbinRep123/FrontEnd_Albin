import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-usuarios', 
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  usuarios = []

  constructor(private usuarioService: UsuarioService, private router: Router, private alert: AlertController) { }

  ngOnInit() { 
    this.usuarioService.cargarUsuarios().subscribe(data =>{
      this.usuarios = data;
    })
  }

  ionViewWillEnter(){
    this.usuarioService.cargarUsuarios().subscribe(data =>{
      this.usuarios = data;
    })
  }


  agregarUsuario(){
    this.router.navigate(['/usuariospost'])
  }

  async borrar (usuario, i){
    const id_usuarios = `${ usuario.id_usuarios }`;
    const alert = await this.alert.create(
      {
        header: 'ADVERTENCIA!!!',
        message: `Quieres eliminar el usuario con el id?<br><strong>${id_usuarios}</strong></br>`,
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
              this.usuarioService.deleteUsuario(usuario.id_usuarios).subscribe(
                resp => {
                  console.log(resp);
                  this.usuarios.splice(i,1);
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
 