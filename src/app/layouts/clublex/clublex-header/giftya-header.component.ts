import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInRight, fadeInTopRight } from 'ng-animate';

@Component({
  selector: 'app-clublex-header',
  templateUrl: './clublex-header.component.html',
  styleUrls: ['./clublex-header.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInTopRight,{
      params: { timing: 3, delay: 0 }
    }))])
  ],
})
export class ClublexHeaderComponent implements OnInit {
  fadeInTopRight: any;
  constructor() { }

  ngOnInit() {
  }

}
