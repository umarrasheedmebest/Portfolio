import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInRight } from 'ng-animate';
@Component({
  selector: 'app-fert-about',
  templateUrl: './fert-about.component.html',
  styleUrls: ['./fert-about.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight,{
      params: { timing: 5, delay: 2 }
    }))])
  ],
})
export class FertAboutComponent implements OnInit {
  fadeInRight: any;
  constructor() { }

  ngOnInit() {
  }

}
