import { Component } from '@angular/core';
import { ProjectsService } from '../projects.service';


@Component({ selector: 'portfolio-projects', templateUrl: './projects.component.html', styleUrls: ['./projects.component.css'] })
export class ProjectsComponent {


  constructor(public projects: ProjectsService) { }

  // splits name from API
  splitName(theString: string) {
    return theString.replace(/-/g, ' ').split(/(?=[A-Z])/).join(" ");
  }
}