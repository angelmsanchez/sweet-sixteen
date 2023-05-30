import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'panel', pathMatch: 'full' },
  {
    path: 'classic',
    loadChildren: () =>
      import('./classic-module/classic-module.module').then(
        (m) => m.ClassicModuleModule
      ),
  },
  {
    path: 'panel',
    loadComponent: () =>
      import('./standalones/panel/panel.component').then(
        (mod) => mod.PanelComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
