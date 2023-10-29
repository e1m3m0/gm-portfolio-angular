import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjectsList () {
    return this.http.get('https://api.github.com/users/e1m3m0/repos')
  }

  getProjectImage (project: String) {
    return this.http.get(`http://api.linkpreview.net/?key=${environment.linkpreview}&q=${project}`)
  }

}
