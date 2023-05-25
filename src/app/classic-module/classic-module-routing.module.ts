import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassicPageComponent } from './pages/classic-page/classic-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClassicPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassicModuleRoutingModule {}
