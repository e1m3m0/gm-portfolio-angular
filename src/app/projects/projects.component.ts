import { Component } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { map } from 'rxjs';

@Component({
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectsList: any;

  constructor (private projects: ProjectsService) {}

  ngOnInit() {
    this.projects.getProjectsList().subscribe( repos => {
      this.projectsList = repos
      // console.log(this.projectsList)
      
      for (let i = 0; i < this.projectsList.length; i++) {
        if(this.projectsList[i].description){
        this.projects.getProjectImage(this.projectsList[i].html_url).pipe(map((mdata: any) => {
         return mdata.image
        })).subscribe(information => {
          this.projectsList[i].image = information
        })    
      }}
      
    })
  }

  splitName(theString: string) {
    return theString.split(/(?=[A-Z])/).join(" ");
}

  






  

}
