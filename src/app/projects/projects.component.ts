import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project.model';
import { projectInfo } from './project-info/project-info';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = projectInfo;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  navigateToProject(project: Project) {
    console.log(project.title);
    this.router.navigate([project.title], {relativeTo: this.route});
  }

}
