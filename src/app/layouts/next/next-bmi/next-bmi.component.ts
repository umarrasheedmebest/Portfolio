import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInLeft } from 'ng-animate';

@Component({
  selector: 'app-next-bmi',
  templateUrl: './next-bmi.component.html',
  styleUrls: ['./next-bmi.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft, {
      params: { timing: 5, delay: 0 }
    }))])
  ],
})
export class NextBMIComponent implements OnInit {

  fadeInLeft:any;

  constructor() { }

  ngOnInit() {
  }

}
