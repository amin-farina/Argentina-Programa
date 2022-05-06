import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Body/home/home.component';
import { AboutComponent } from './Components/Body/about/about.component';
import { LoginComponent } from './Components/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,},
  {path: 'About', component: AboutComponent},
  {path: '**', component: AboutComponent},
  /*{path: jugador/:id, component: FichaJugadorComponent}, IDENTIFICADOR CON SU ID*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
