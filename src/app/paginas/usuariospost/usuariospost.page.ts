import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioM } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-usuariospost',
  templateUrl: './usuariospost.page.html',
  styleUrls: ['./usuariospost.page.scss'],
})
export class UsuariospostPage implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  agregarNuevoUsuario(id_usuarios, nombres, apellido_paterno, apellido_materno, edad, sexo, imc, id_entrenamiento){
    const ALBIN : UsuarioM = {
      id_usuarios: id_usuarios.value,
      nombres: nombres.value,
      apellido_paterno: apellido_paterno.value,
      apellido_materno: apellido_materno.value,
      edad: edad.value,
      sexo: sexo.value,
      imc: imc.value,
      id_entrenamiento: id_entrenamiento.value
    }

    this.usuarioService.agregarUsuario(ALBIN).subscribe(data =>{
      this.router.navigate([`/usuarios`])
    })
  } 

}
 