import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInLeft } from 'ng-animate';

@Component({
  selector: 'app-giftya-view-one',
  templateUrl: './giftya-view-one.component.html',
  styleUrls: ['./giftya-view-one.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft, {
      // Set the duration to 5seconds and delay to 0seconds
      params: { timing: 5, delay: 3 }
    }))])
  ],
})
export class GiftyaViewOneComponent implements OnInit {
  fadeInLeft: any;
  constructor() { }

  ngOnInit() {
  }

}
