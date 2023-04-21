import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Common/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { SidebarComponent } from './Common/sidebar/sidebar.component';
import { MainContainerComponent } from './Components/main-container/main-container.component';
import { GenericComponentComponent } from './Common/generic-component/generic-component.component';
import { ButtonsComponent } from './Common/buttons/buttons.component';
import { InputsComponent } from './Common/inputs/inputs.component';
import { TablesComponent } from './Common/tables/tables.component';
import { CardsComponent } from './Common/cards/cards.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProgramComponent } from './Components/program/program.component';
import { DocumentListComponent } from './Components/document-list/document-list.component';
import { FindAssignComponent } from './Components/find-assign/find-assign.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SidebarComponent,
    MainContainerComponent,
    GenericComponentComponent,
    ButtonsComponent,
    InputsComponent,
    TablesComponent,
    CardsComponent,
    DashboardComponent,
    ProgramComponent,
    DocumentListComponent,
    FindAssignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
