import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInRight } from 'ng-animate';
@Component({
  selector: 'app-giftya-about',
  templateUrl: './giftya-about.component.html',
  styleUrls: ['./giftya-about.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight,{
      params: { timing: 5, delay: 2 }
    }))])
  ],
})
export class GiftyaAboutComponent implements OnInit {
  fadeInRight: any;
  constructor() { }

  ngOnInit() {
  }

}
