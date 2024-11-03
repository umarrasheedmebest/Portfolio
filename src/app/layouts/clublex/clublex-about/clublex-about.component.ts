import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInRight } from 'ng-animate';
@Component({
  selector: 'app-clublex-about',
  templateUrl: './clublex-about.component.html',
  styleUrls: ['./clublex-about.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight,{
      params: { timing: 5, delay: 2 }
    }))])
  ],
})
export class ClublexAboutComponent implements OnInit {
  fadeInRight: any;
  constructor() { }

  ngOnInit() {
  }

}
