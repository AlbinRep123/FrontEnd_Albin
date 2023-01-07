import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },

  /*{
    path: 'ejercicios',
    children: [
      {
        path:"",
        loadChildren: () => import('./paginas/ejercicios/ejercicios.module').then( m => m.EjerciciosPageModule)
      },
      {
        path:"id",
        loadChildren: () => import('./paginas/ejercicioinfo/ejercicioinfo.module').then( m => m.EjercicioinfoPageModule)
      }
    ]
  },*/

  {
    path: 'ejercicios',
    loadChildren: () => import('./paginas/ejercicios/ejercicios.module').then( m => m.EjerciciosPageModule)
  },
  {
    path: 'planalimentacion',
    loadChildren: () => import('./paginas/planalimentacion/planalimentacion.module').then( m => m.PlanalimentacionPageModule)
  },
  {
    path: 'planentrenamiento',
    loadChildren: () => import('./paginas/planentrenamiento/planentrenamiento.module').then( m => m.PlanentrenamientoPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./paginas/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'ejerciciopost',
    loadChildren: () => import('./paginas/ejerciciopost/ejerciciopost.module').then( m => m.EjerciciopostPageModule)
  },
  {
    path: 'planalimentacionpost',
    loadChildren: () => import('./paginas/planalimentacionpost/planalimentacionpost.module').then( m => m.PlanalimentacionpostPageModule)
  },
  {
    path: 'planentrenamientopost',
    loadChildren: () => import('./paginas/planentrenamientopost/planentrenamientopost.module').then( m => m.PlanentrenamientopostPageModule)
  },
  {
    path: 'usuariospost',
    loadChildren: () => import('./paginas/usuariospost/usuariospost.module').then( m => m.UsuariospostPageModule)
  },
  {
    path: 'ejercicioinfo/:id',
    loadChildren: () => import('./paginas/ejercicioinfo/ejercicioinfo.module').then( m => m.EjercicioinfoPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./paginas/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'usuariosinfo/:id',
    loadChildren: () => import('./paginas/usuariosinfo/usuariosinfo.module').then( m => m.UsuariosinfoPageModule)
  },
  {
    path: 'planalimentacioninfo/:id',
    loadChildren: () => import('./paginas/planalimentacioninfo/planalimentacioninfo.module').then( m => m.PlanalimentacioninfoPageModule)
  },
  {
    path: 'planentrenamientoinfo/:id',
    loadChildren: () => import('./paginas/planentrenamientoinfo/planentrenamientoinfo.module').then( m => m.PlanentrenamientoinfoPageModule)
  },
  {
    path: 'ejercicioedit/:id',
    loadChildren: () => import('./paginas/ejercicioedit/ejercicioedit.module').then( m => m.EjercicioeditPageModule)
  },
  {
    path: 'usuariosedit/:id',
    loadChildren: () => import('./paginas/usuariosedit/usuariosedit.module').then( m => m.UsuarioseditPageModule)
  },
  {
    path: 'planentrenamientoedit/:id',
    loadChildren: () => import('./paginas/planentrenamientoedit/planentrenamientoedit.module').then( m => m.PlanentrenamientoeditPageModule)
  },
  {
    path: 'planalimentacionedit/:id',
    loadChildren: () => import('./paginas/planalimentacionedit/planalimentacionedit.module').then( m => m.PlanalimentacioneditPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
