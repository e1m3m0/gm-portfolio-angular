import {Component} from '@angular/core';
import {ProjectsService} from '../projects.service';
import { RepositoryListService } from '../repository-list.service';

@Component({selector: 'portfolio-projects', templateUrl: './projects.component.html', styleUrls: ['./projects.component.css']})
export class ProjectsComponent {
  

  constructor(private projects : ProjectsService, private repo: RepositoryListService) {}

  projectsList = this.repo.repolist
  imagelist = [
    "608910260","400609197"
  ]
  
  ngOnInit() {

    this.projects.getProjectsList().subscribe(repos => {
      this.projectsList = repos
      console.log(this.projectsList)

      for (let i = 0; i < this.projectsList.length; i++) {
        if (this.projectsList[i].private === true ) {
          this.projectsList[i].splice(i,1)
        }
      }
      
      for (let i = 0; i < this.imagelist.length; i++) {
        let imageURL = `/assets/images/${this.imagelist[i]}.jpg`
        for (let j = 0; j < this.projectsList.length; j++){
          if ( this.projectsList[j].id == this.imagelist[i] ) {
            this.projectsList[j].imageURL = imageURL
            console.log(this.projectsList[j])
          }
          
        }
      }
    })




    // this.projects.getProjectsList().subscribe(repos => {
    //   this.projectsList = repos
    //   console.log(this.projectsList)

    //   for (let i = 0; i < this.projectsList.length; i++) {
    //     if (this.projectsList[i].private === true ) {
    //       this.projectsList[i].splice(i,1)
    //     }
    //   }

    // })
  }

  splitName(theString : string) {

    return theString.replace(/-/g,' ').split(/(?=[A-Z])/).join(" ");
  }


}
