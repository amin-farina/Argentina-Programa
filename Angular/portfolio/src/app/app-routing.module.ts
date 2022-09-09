import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { WorksComponent } from './components/works/works.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { VacsComponent } from './components/vacs/vacs.component';

const appRoutes:Routes = [
  {path: '', component: HeroComponent},
  {path: 'hero', component: HeroComponent},
  {path: 'about', component: AboutComponent},
  {path: 'experiencie', component: ExperienceComponent},
  {path: 'works', component: WorksComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'vacs', component: VacsComponent},
  {path: '**', pathMatch: 'full', component: HeroComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
