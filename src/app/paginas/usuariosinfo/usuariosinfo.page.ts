import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UsuarioM } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-usuariosinfo',
  templateUrl: './usuariosinfo.page.html',
  styleUrls: ['./usuariosinfo.page.scss'],
})
export class UsuariosinfoPage implements OnInit {
  
  usua: UsuarioM

  constructor(private usuarioService: UsuarioService, private router: Router,
              private activatedRoute: ActivatedRoute, http: HttpClient, private NavController: NavController ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.usuarioService.cargarUsuario(id).subscribe( datos =>{
        this.usua = datos;
        console.log(datos);
      })
    })
  } 

}
