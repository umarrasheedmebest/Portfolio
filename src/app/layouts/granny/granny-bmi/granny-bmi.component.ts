import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInLeft } from 'ng-animate';

@Component({
  selector: 'app-granny-bmi',
  templateUrl: './granny-bmi.component.html',
  styleUrls: ['./granny-bmi.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft, {
      params: { timing: 5, delay: 0 }
    }))])
  ],
})
export class GrannyBMIComponent implements OnInit {

  fadeInLeft:any;

  constructor() { }

  ngOnInit() {
  }

}
