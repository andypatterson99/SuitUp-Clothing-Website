import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingComponent } from './components/shopping/shopping.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { AutumnComponent } from './components/seasons/autumn/autumn.component';
import { HomeComponent } from './components/home/home.component';
import { SummerComponent } from './components/seasons/summer/summer.component';
import { WinterComponent } from './components/seasons/winter/winter.component';

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shop', component: ShoppingComponent },
  { path: 'autumn', component: AutumnComponent },
  { path: 'summer', component: SummerComponent },
  // { path: 'spring', component: SpringComponent },
  { path: 'winter', component: WinterComponent },

  { path: '**', component: PageNotFoundComponent }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
