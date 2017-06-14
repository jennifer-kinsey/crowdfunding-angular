import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(
    name: string,
    owner: string,
    description: string,
    goal: number,
    purpose: string,
    swag: string,
    category: string,
    image: string
  ) {
    var newProject: Project = new Project(name, owner, description, goal, purpose, swag, goal, category, image);
    console.log(newProject);
    this.projectService.addProject(newProject);
  }
}
