import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEperienceComponent } from './componentes/experience/new-experience.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { UpdateEperienceComponent } from './componentes/experience/update-experience.component';
import { NewSkillComponent } from './componentes/skills/new-skill.component';
import { UpdateSkillComponent } from './componentes/skills/update-skill.component';
import { UpdatePersonaComponent } from './componentes/experience/update-persona.component';
import { UpdateEducacionComponent } from './componentes/educacion/update-educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { UpdateProyectoComponent } from './componentes/proyectos/update-proyecto.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'nuevaexp', component: NewEperienceComponent },
    { path: 'editexp/:id', component: UpdateEperienceComponent },
    { path: 'nuevoskill', component: NewSkillComponent },
    { path: 'update/:id', component: UpdateSkillComponent },
    { path: 'updatePersona', component: UpdatePersonaComponent },
    { path: 'nuevaeduc', component: NewEducacionComponent },
    { path: 'updateedu/:id', component: UpdateEducacionComponent },
    { path: 'nuevaproyec', component: NewProyectoComponent },
    { path: 'editproyecto/:id', component: UpdateProyectoComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }