import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialsModule } from '../materials/materials.module';
import { BookTicketComponent } from './components/book-ticket/book-ticket.component';


@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent,
    BookTicketComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialsModule
  ]
})
export class CoreModule { }
