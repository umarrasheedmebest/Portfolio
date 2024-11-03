import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInRight } from 'ng-animate';

@Component({
  selector: 'app-granny-view-two',
  templateUrl: './granny-view-two.component.html',
  styleUrls: ['./granny-view-two.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight, {
      params: { timing: 5, delay: 4 }
    }))])
  ],
})
export class GrannyViewTwoComponent implements OnInit {
  fadeInRight: any;
  constructor() { }

  ngOnInit() {
  }

}
