import {Component} from '@angular/core';
import {ProjectsService} from '../projects.service';
import { RepositoryListService } from '../repository-list.service';
// import * as AWS from 'aws-sdk'

@Component({selector: 'portfolio-projects', templateUrl: './projects.component.html', styleUrls: ['./projects.component.css']})
export class ProjectsComponent {
  

  constructor(private projects : ProjectsService, private repo: RepositoryListService) {}

  projectsList = this.repo.repolist
  // list of available images
  imagelist = [
    "608910260","629268901","403672030"
  ]
  
  ngOnInit() {
// Return list of projects in github, and removes private repos
    this.projects.getProjectsList().subscribe(repos => {
      this.projectsList = repos
      for (let i = 0; i < this.projectsList.length; i++) {
        if (this.projectsList[i].private === true ) {
          this.projectsList[i].splice(i,1)
        }
      }
      // adds image to portfolio
      // working on using AWS bucket to store images
      for (let i = 0; i < this.imagelist.length; i++) {
        let imageURL = `/assets/images/${this.imagelist[i]}.png`
        for (let j = 0; j < this.projectsList.length; j++){
          if ( this.projectsList[j].id == this.imagelist[i] ) {
            this.projectsList[j].imageURL = imageURL
          }     
        }
      }
    })
  }
  // splits name from API
  splitName(theString : string) {
    return theString.replace(/-/g,' ').split(/(?=[A-Z])/).join(" ");
  }

  // s3= new AWS.S3()
  // url = this.s3.getSignedUrl('getObject',{
  //   Bucket: 'gamateop'

  // })
}
