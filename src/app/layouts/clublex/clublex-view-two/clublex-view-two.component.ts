import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInRight } from 'ng-animate';

@Component({
  selector: 'app-clublex-view-two',
  templateUrl: './clublex-view-two.component.html',
  styleUrls: ['./clublex-view-two.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight, {
      // Set the duration to 5seconds and delay to 0seconds
      params: { timing: 5, delay: 4 }
    }))])
  ],
})
export class ClublexViewTwoComponent implements OnInit {
  fadeInRight: any;
  constructor() { }

  ngOnInit() {
  }

}
