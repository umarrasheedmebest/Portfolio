import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInRight } from 'ng-animate';
@Component({
  selector: 'app-next-about',
  templateUrl: './next-about.component.html',
  styleUrls: ['./next-about.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight,{
      params: { timing: 5, delay: 2 }
    }))])
  ],
})
export class NextAboutComponent implements OnInit {
  fadeInRight: any;
  constructor() { }

  ngOnInit() {
  }

}
