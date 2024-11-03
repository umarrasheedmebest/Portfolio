import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInLeft } from 'ng-animate';

@Component({
  selector: 'app-fert-view-one',
  templateUrl: './fert-view-one.component.html',
  styleUrls: ['./fert-view-one.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft, {
      params: { timing: 5, delay: 3 }
    }))])
  ],
})
export class FertViewOneComponent implements OnInit {
  fadeInLeft: any;
  constructor() { }

  ngOnInit() {
  }

}
