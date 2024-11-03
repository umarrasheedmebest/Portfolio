import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInRight } from 'ng-animate';
@Component({
  selector: 'app-granny-about',
  templateUrl: './granny-about.component.html',
  styleUrls: ['./granny-about.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight,{
      params: { timing: 5, delay: 2 }
    }))])
  ],
})
export class GrannyAboutComponent implements OnInit {
  fadeInRight: any;
  constructor() { }

  ngOnInit() {
  }

}
