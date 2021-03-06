import { DashboardModule } from './views/dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingModule } from './views/landing/landing.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'landing'
  },
  {
    path: 'landing',
    loadChildren: () => import('./views/landing/landing-routing.module').then((m) => LandingModule),data: {
      shouldPreload: true
    }

  },
  {
    path:'dashboard',
    loadChildren:()=>import('./views/dashboard/dashboard-routing.module').then((m)=> DashboardModule),data:{
      shouldPreload:true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
