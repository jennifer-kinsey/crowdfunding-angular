import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  filterByCategory: string = "allProjects";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(category){
    console.log(category);
    this.filterByCategory = category;
  }

  goToCategoryPage(category) {
    this.router.navigate([category])
  }
}
