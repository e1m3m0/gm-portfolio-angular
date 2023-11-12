import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-hero',
  template: `
  <img src="/assets/images/hero.jpg" alt="">
  `,
  styles: [
    `
    img{
      width: 100%;
    }
    `
  ]
})
export class HeroComponent {

}
