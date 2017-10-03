
import { MainHeroComponent } from '../../components/main-hero/main-hero.component';
import { DetailHeroComponent } from '../../components/detail-hero/detail-hero.component';
import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { RouterModule, Route, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const appRoots: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: MainHeroComponent },
  { path: 'detail/:id', component: DetailHeroComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoots)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRootingModule { }
