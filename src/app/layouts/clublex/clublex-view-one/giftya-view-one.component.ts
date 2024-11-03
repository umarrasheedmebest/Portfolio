import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInLeft } from 'ng-animate';

@Component({
  selector: 'app-clublex-view-one',
  templateUrl: './clublex-view-one.component.html',
  styleUrls: ['./clublex-view-one.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft, {
      params: { timing: 5, delay: 3 }
    }))])
  ],
})
export class ClublexViewOneComponent implements OnInit {
  fadeInLeft: any;
  constructor() { }

  ngOnInit() {
  }

}
