import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInRight } from 'ng-animate';

@Component({
  selector: 'app-fert-view-two',
  templateUrl: './fert-view-two.component.html',
  styleUrls: ['./fert-view-two.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight, {
      params: { timing: 5, delay: 4 }
    }))])
  ],
})
export class FertViewTwoComponent implements OnInit {
  fadeInRight: any;
  constructor() { }

  ngOnInit() {
  }

}
