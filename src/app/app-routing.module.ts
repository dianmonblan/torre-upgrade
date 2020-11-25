import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';


const routes: Routes = [];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy,
      initialNavigation: 'enabled'
    })
  ],
  exports: [
    RouterModule,
    QuicklinkModule
  ]
})
export class AppRoutingModule { }
