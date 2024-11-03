import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInRight, fadeInTopRight } from 'ng-animate';

@Component({
  selector: 'app-fert-header',
  templateUrl: './fert-header.component.html',
  styleUrls: ['./fert-header.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInTopRight,{
      params: { timing: 3, delay: 0 }
    }))])
  ],
})
export class FertHeaderComponent implements OnInit {
  fadeInTopRight: any;
  constructor() { }

  ngOnInit() {
  }

}
