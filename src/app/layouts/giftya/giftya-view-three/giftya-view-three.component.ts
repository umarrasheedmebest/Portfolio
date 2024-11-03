import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInRight } from 'ng-animate';

@Component({
  selector: 'app-giftya-view-three',
  templateUrl: './giftya-view-three.component.html',
  styleUrls: ['./giftya-view-three.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight, {
      params: { timing: 5, delay: 3 }
    }))])
  ],
})
export class GiftyaViewThreeComponent implements OnInit {
  fadeInRight: any;
  constructor() { }

  ngOnInit() {
  }

}
