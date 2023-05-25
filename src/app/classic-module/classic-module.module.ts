import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassicModuleRoutingModule } from './classic-module-routing.module';
import { ClassicPageComponent } from './pages/classic-page/classic-page.component';


@NgModule({
  declarations: [
    ClassicPageComponent
  ],
  imports: [
    CommonModule,
    ClassicModuleRoutingModule
  ]
})
export class ClassicModuleModule { }
