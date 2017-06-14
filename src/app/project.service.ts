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

  getProjectById(projectId: string) {
    return this.database.object('projects/' + projectId);
  }

  updateProject(localUpdatedProject){
    var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({name: localUpdatedProject.name,
                                owner: localUpdatedProject.owner,
                                description: localUpdatedProject.description,
                                goal: localUpdatedProject.goal,
                                purpose: localUpdatedProject.purpose,
                                swag: localUpdatedProject.swag,
                                remainder: localUpdatedProject.remainder,
                                category: localUpdatedProject.category,
                                image: localUpdatedProject.image});
  }
}
