import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInRight, fadeInTopRight } from 'ng-animate';

@Component({
  selector: 'app-granny-header',
  templateUrl: './granny-header.component.html',
  styleUrls: ['./granny-header.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInTopRight,{
      params: { timing: 3, delay: 0 }
    }))])
  ],
})
export class GrannyHeaderComponent implements OnInit {
  fadeInTopRight: any;
  constructor() { }

  ngOnInit() {
  }

}
