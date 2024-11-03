import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInLeft } from 'ng-animate';

@Component({
  selector: 'app-giftya-bmi',
  templateUrl: './giftya-bmi.component.html',
  styleUrls: ['./giftya-bmi.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft, {
      // Set the duration to 5seconds and delay to 0seconds
      params: { timing: 5, delay: 0 }
    }))])
  ],
})
export class GiftyaBMIComponent implements OnInit {

  fadeInLeft:any;

  constructor() { }

  ngOnInit() {
  }

}
