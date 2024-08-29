import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  projectsList: any
  projectsUpdated: any = []

  getProjectsList() {
    return this.http.get('https://api.github.com/users/e1m3m0/repos')
  }

  updateProjects() {
    // Return list of projects in github, and removes private repos and projects with uncompleted description
    this.getProjectsList().subscribe(repos => {
      this.projectsList = repos

      for (let i = 0; i < this.projectsList.length; i++) {
        let imageURL = `https://raw.githubusercontent.com/e1m3m0/${this.projectsList[i].name}/main/${this.projectsList[i].id}.png`
        this.projectsList[i].imageURL = imageURL
        if (this.projectsList[i].description) {
          this.projectsUpdated.push(this.projectsList[i])
        } else {
          console.log(this.projectsList[i].name + " " + this.projectsList[i].id)
        }
      }
    })
    return this.projectsUpdated
  }



}
