import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AboutSkillsComponent } from './componentes/skills/skills.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkExperienceComponent } from './componentes/experience/work-experience.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { LinksComponent } from './componentes/links/links.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NewEperienceComponent } from './componentes/experience/new-experience.component';
import { UpdateEperienceComponent } from './componentes/experience/update-experience.component';
import { UpdateSkillComponent } from './componentes/skills/update-skill.component';
import { NewSkillComponent } from './componentes/skills/new-skill.component';
import { UpdatePersonaComponent } from './componentes/experience/update-persona.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { UpdateEducacionComponent } from './componentes/educacion/update-educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { UpdateProyectoComponent } from './componentes/proyectos/update-proyecto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { interceptorProvider } from './services/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutSkillsComponent,
    WorkExperienceComponent,
    HomeComponent,
    LoginComponent,
    LinksComponent,
    NavbarComponent,
    NewEperienceComponent,
    UpdateEperienceComponent,
    UpdateSkillComponent,
    NewSkillComponent,
    UpdatePersonaComponent,
    EducacionComponent,
    UpdateEducacionComponent,
    NewEducacionComponent,
    ProyectosComponent,
    NewProyectoComponent,
    UpdateProyectoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
