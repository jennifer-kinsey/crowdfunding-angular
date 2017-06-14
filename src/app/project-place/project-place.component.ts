import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-project-place',
  templateUrl: './project-place.component.html',
  styleUrls: ['./project-place.component.css'],
  providers: [ProjectService]
})

export class ProjectPlaceComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private router: Router, private projectService: ProjectService){}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetailPage(clickedProject: Project) {
    // this.router.navigate(['projects', clickedProject.id]);
  };
}
