import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectPlaceComponent }   from './project-place/project-place.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },{
    path: 'projects',
    component: ProjectPlaceComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
