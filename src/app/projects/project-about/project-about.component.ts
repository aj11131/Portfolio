import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projectInfo } from '../project-info/project-info';
import { Project } from 'src/app/shared/project.model';

@Component({
  selector: 'app-project-about',
  templateUrl: './project-about.component.html',
  styleUrls: ['./project-about.component.css']
})
export class ProjectAboutComponent implements OnInit {
  @ViewChild('features', {static: true}) features: ElementRef;
  projectName: string;
  projects: Project[];
  currentProject: Project;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.projectName = this.route.snapshot.params.project;
    this.projects = projectInfo;
    this.projects.forEach(project => {
      if (project.title === this.projectName) {
        this.currentProject = project;
      }
    });
    this.features.nativeElement.innerHTML = this.currentProject.features;
  }

}
