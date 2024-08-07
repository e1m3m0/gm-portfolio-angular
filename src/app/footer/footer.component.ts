import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-footer',
  template: `
<footer class="d-flex flex-wrap justify-content-between align-items-center py-1 my-2 border-top ">
    <div class="col-md-4 d-flex align-items-center ms-4">
      <span class="text-muted">©2024 Guillermo Mateo</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex me-4">
      <li class="ms-3">
        <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="https://github.com/e1m3m0">
        <i-bs name="github" width="2rem" height="2rem"></i-bs></a>
      </li>
      <li class="ms-3">
        <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="https://www.linkedin.com/in/guillermo-mateo-94988471/">
        <i-bs name="linkedin" width="2rem" height="2rem"></i-bs></a>
      </li>
      <li class="ms-3">
        <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="mailto:gamateo@gmail.com">
        <i-bs name="envelope" width="2rem" height="2rem"></i-bs></a>
      </li>
    </ul>
  </footer>
  `,
  styles: [
  ]
})
export class FooterComponent {

}
