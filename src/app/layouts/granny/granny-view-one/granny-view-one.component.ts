import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInLeft } from 'ng-animate';

@Component({
  selector: 'app-granny-view-one',
  templateUrl: './granny-view-one.component.html',
  styleUrls: ['./granny-view-one.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft, {
            params: { timing: 5, delay: 3 }
    }))])
  ],
})
export class GrannyViewOneComponent implements OnInit {
  fadeInLeft: any;
  constructor() { }

  ngOnInit() {
  }

}
