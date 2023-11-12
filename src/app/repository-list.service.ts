import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RepositoryListService {

  constructor(private http: HttpClient) { }
  repolist: any
  imagelist = [
    "608910260","400609197"
  ]
  getRepList () {
    return this.http.get(environment.githubapi)
  }

  ngOnInit() {
    this.getRepList().subscribe(repos => {
      this.repolist = repos
      console.log(this.repolist)

      for (let i = 0; i < this.repolist.length; i++) {
        if (this.repolist[i].private === true ) {
          this.repolist[i].splice(i,1)
        }
      }
      
      for (let i = 0; i < this.imagelist.length; i++) {
        let imageURL = `app/assets/images/${this.imagelist[i]}.png`
        console.log(imageURL)
        for (let j = 0; j < this.repolist.length; j++){
          if ( this.repolist[j].id == this.imagelist[i] ) {
            this.repolist[j].imageURL = imageURL
            console.log(this.repolist[j])
          }
          
        }
      }
    })
  }

}
