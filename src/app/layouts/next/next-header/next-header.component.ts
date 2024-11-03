import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInRight, fadeInTopRight } from 'ng-animate';

@Component({
  selector: 'app-next-header',
  templateUrl: './next-header.component.html',
  styleUrls: ['./next-header.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInTopRight,{
      params: { timing: 3, delay: 0 }
    }))])
  ],
})
export class NextHeaderComponent implements OnInit {
  fadeInTopRight: any;
  constructor() { }

  ngOnInit() {
  }

}
