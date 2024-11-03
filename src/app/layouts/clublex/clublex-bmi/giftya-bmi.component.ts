import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInLeft } from 'ng-animate';

@Component({
  selector: 'app-clublex-bmi',
  templateUrl: './clublex-bmi.component.html',
  styleUrls: ['./clublex-bmi.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft, {
      params: { timing: 5, delay: 0 }
    }))])
  ],
})
export class ClublexBMIComponent implements OnInit {

  fadeInLeft:any;

  constructor() { }

  ngOnInit() {
  }

}
