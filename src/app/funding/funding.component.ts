import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-funding',
  templateUrl: './funding.component.html',
  styleUrls: ['./funding.component.css'],
  providers: [ProjectService]
})
export class FundingComponent implements OnInit {
  @Input() selectedProject;
  projects: FirebaseListObservable<any[]>

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  donateMoney(project, num) {
    console.log(project);
    project.remainder -= num;
    this.projectService.donate(project);
  }

}
