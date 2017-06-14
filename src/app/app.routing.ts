import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectPlaceComponent }   from './project-place/project-place.component';
import { ProjectDetailComponent }   from './project-detail/project-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'projects',
    component: ProjectPlaceComponent
  },
  {
  path: 'projects/:id',
  component: ProjectDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
