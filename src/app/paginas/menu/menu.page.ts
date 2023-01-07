import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/modelos/componente.interface';
import { PrincipalService } from 'src/app/servicios/principal.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  componentes:Observable<Componente[]>;

  constructor(private menuCtrl: MenuController, private principal: PrincipalService ) { }

  ngOnInit() {

    this.componentes = this.principal.getMenuOpts();
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }
}
