import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {FormulaireComponent} from './components/formulaire/formulaire.component';
import {ProjectComponent} from './components/project/project.component';
import {CertificationComponent} from './components/certification/certification.component';


const routes: Routes = [
  {path:"",component:PortfolioComponent},
  {path:"experience",component:ExperienceComponent},
  {path:"project",component:ProjectComponent},
  {path:"certification",component:CertificationComponent},
  {path:"formulaire", component:FormulaireComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
