import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectAboutComponent } from './projects/project-about/project-about.component';
import { ConfirmComponent } from './contact/confirm/confirm.component';


const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/:project', component: ProjectAboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'confirm', component: ConfirmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
