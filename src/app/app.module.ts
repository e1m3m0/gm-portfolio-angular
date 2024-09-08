import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { github, linkedin, envelope, browserChrome, briefcaseFill, personRolodex, fileEarmarkFill} from 'ngx-bootstrap-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ContactmeComponent } from './contactme/contactme.component';

const icons = {
  github,
  linkedin,
  envelope,
  browserChrome,
  briefcaseFill, 
  personRolodex,
  fileEarmarkFill
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    HomeComponent,
    ContactmeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
