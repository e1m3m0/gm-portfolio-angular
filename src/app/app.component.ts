import { Component } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gm-portfolio-angular';

  constructor (public projects: ProjectsService ) {}

  ngOnInit () {
    this.projects.updateProjects()
  }
}
