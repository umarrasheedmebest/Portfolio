import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/navigation/menu/menu.component';
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';
import { RouterModule } from '@angular/router';
import { CenterMenuComponent } from './components/navigation/center-menu/center-menu.component';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [MenuComponent, TapToTopComponent, CenterMenuComponent, LoaderComponent],
  exports:[
    MenuComponent,
    LoaderComponent,
    CenterMenuComponent,
    TapToTopComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot()
  ]
})
export class SharedModule { }
