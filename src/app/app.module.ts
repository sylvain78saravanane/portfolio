import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectComponent } from './components/project/project.component';
import { CertificationComponent } from './components/certification/certification.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { LinksComponent } from './components/links/links.component';
import {MatIcon} from '@angular/material/icon';
import { ArchitecturePictureComponent } from './components/architecture-picture/architecture-picture.component';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PresentationComponent,
    ExperienceComponent,
    ProjectComponent,
    CertificationComponent,
    FormulaireComponent,
    PortfolioComponent,
    LinksComponent,
    ArchitecturePictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIcon,
    MatFormField,
    MatInput,
    MatLabel
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
