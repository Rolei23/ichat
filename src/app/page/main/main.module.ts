import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

// import { Storage } from '@ionic/storage';
import { IonicModule } from '@ionic/angular';
import { MainPage } from './MainPage.1';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild(routes)
  ],
  declarations: [MainPage]
})
export class MainPageModule {}

const routes: Routes = [
  {
    path: ':id',
    component:MainPage
  }  
];