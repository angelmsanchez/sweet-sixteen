import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'classic', pathMatch: 'full' },
  {
    path: 'classic',
    loadChildren: () =>
      import('./classic-module/classic-module.module').then(
        (m) => m.ClassicModuleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
