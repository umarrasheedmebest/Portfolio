import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInLeft } from 'ng-animate';

@Component({
  selector: 'app-next-view-one',
  templateUrl: './next-view-one.component.html',
  styleUrls: ['./next-view-one.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft, {
      params: { timing: 5, delay: 3 }
    }))])
  ],
})
export class NextViewOneComponent implements OnInit {
  fadeInLeft: any;
  constructor() { }

  ngOnInit() {
  }

}
