import { Component } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { RepositoryListService } from '../repository-list.service';

@Component({ selector: 'portfolio-projects', templateUrl: './projects.component.html', styleUrls: ['./projects.component.css'] })
export class ProjectsComponent {


  constructor(private projects: ProjectsService, private repo: RepositoryListService) { }

  projectsList = this.repo.repolist
  projectsApproved: any = []


  ngOnInit() {
    // Return list of projects in github, and removes private repos and projects with uncompleted description
    this.projects.getProjectsList().subscribe(repos => {
      this.projectsList = repos

      for (let i = 0; i < this.projectsList.length; i++) {
        let imageURL = `https://raw.githubusercontent.com/e1m3m0/${this.projectsList[i].name}/main/${this.projectsList[i].id}.png`
        this.projectsList[i].imageURL = imageURL
        if (this.projectsList[i].description) {
          this.projectsApproved.push(this.projectsList[i])
        } else {
          console.log(this.projectsList[i].name+" "+this.projectsList[i].id)
        }
      }
    })
  }
  // splits name from API
  splitName(theString: string) {
    return theString.replace(/-/g, ' ').split(/(?=[A-Z])/).join(" ");
  }
}