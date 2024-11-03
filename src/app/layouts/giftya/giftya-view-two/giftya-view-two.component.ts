import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInRight } from 'ng-animate';

@Component({
  selector: 'app-giftya-view-two',
  templateUrl: './giftya-view-two.component.html',
  styleUrls: ['./giftya-view-two.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight, {
      // Set the duration to 5seconds and delay to 0seconds
      params: { timing: 5, delay: 4 }
    }))])
  ],
})
export class GiftyaViewTwoComponent implements OnInit {
  fadeInRight: any;
  constructor() { }

  ngOnInit() {
  }

}
