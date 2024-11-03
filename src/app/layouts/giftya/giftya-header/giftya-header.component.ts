import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInRight, fadeInTopRight } from 'ng-animate';

@Component({
  selector: 'app-giftya-header',
  templateUrl: './giftya-header.component.html',
  styleUrls: ['./giftya-header.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInTopRight,{
      params: { timing: 3, delay: 0 }
    }))])
  ],
})
export class GiftyaHeaderComponent implements OnInit {
  fadeInTopRight: any;
  constructor() { }

  ngOnInit() {
  }

}
