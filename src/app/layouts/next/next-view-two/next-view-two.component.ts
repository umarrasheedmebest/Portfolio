import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInRight } from 'ng-animate';

@Component({
  selector: 'app-next-view-two',
  templateUrl: './next-view-two.component.html',
  styleUrls: ['./next-view-two.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight, {
      params: { timing: 5, delay: 4 }
    }))])
  ],
})
export class NextViewTwoComponent implements OnInit {
  fadeInRight: any;
  constructor() { }

  ngOnInit() {
  }

}
