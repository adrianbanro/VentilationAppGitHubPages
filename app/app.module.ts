/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { Slider } from './slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddrezzComponent } from './addrezz/addrezz.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';


import { ProductComponent } from './product.component';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    AppComponent, Slider, AddrezzComponent, DashComponent, ProductComponent, ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FormcompComponent } from './formcomp/formcomp.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//import { ProductsComponent } from './products.component';
//import { RatingComponent } from './rating.component';
//import { Rating22Component } from './rating22.component';
//import { ProductComponent } from './product.component';

import { RoomComponent } from './room.component';
import { Slider } from './slider.component';
//import { UserFormComponent } from './user-form.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
//import {MatSliderModule} from '@angular/material';
//import { SliderFormattingExample } from './slider.component';
import { AddrezzComponent } from './addrezz/addrezz.component';

import { RoomsComponent } from './rooms.component';
import { WrapperDataFormatingComponent } from './wrapperDataFormating.component';

//import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
//import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
//import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
//import { TreeComponent } from './tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  declarations: [
    AppComponent,  RoomComponent, RoomsComponent,   WrapperDataFormatingComponent, AddrezzComponent, Slider
    //ProductsComponent, Rating22Component, ProductComponent, Rating22Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    //MatTableModule,
    //MatPaginatorModule,
    //MatSortModule,
    //MatToolbarModule,
    //MatSidenavModule,
    //MatListModule,
    //MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }