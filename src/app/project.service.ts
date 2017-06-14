import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  getProjectById(projectId: number) {
    // for (var i = 0; i < PROJECTS.length; i++) {
    //   if (PROJECTS[i].id === projectId) return PROJECTS[i];
    // }
  }
}
