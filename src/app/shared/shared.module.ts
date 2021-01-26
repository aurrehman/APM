import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomFooterComponent } from './components/customfooter/customfooter.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [CommonModule, RouterModule],

  declarations: [NavigationComponent, CustomFooterComponent, HomeComponent],

  exports: [NavigationComponent, CustomFooterComponent],
})
export class SharedModule {}
