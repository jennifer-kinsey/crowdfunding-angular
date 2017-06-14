import { Component } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-place',
  templateUrl: './project-place.component.html',
  styleUrls: ['./project-place.component.css']
})

export class ProjectPlaceComponent {
  constructor(private router: Router){}

  projects: Project[] = [
    new Project("project1", "owner1", "description1", 1, "purpose1", "swag1", 1, "1", 1),
    new Project("project2", "owner2", "description2", 2, "purpose2", "swag2", 2, "2", 2),
    new Project("project3", "owner3", "description3", 3, "purpose3", "swag3", 3, "3", 3),
    new Project("project4", "owner4", "description4", 4, "purpose4", "swag4", 4, "4", 4),
  ];

  goToDetailPage(clickedProject: Project) {
    this.router.navigate(['projects', clickedProject.id]);
  };
}
