import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfect-gift-web-feature',
  templateUrl: './perfect-gift-web-feature.component.html',
  styleUrls: ['./perfect-gift-web-feature.component.scss']
})
export class PerfectGiftWebFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  business = [
    {
      title:'First Problem',
      description:'Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.'
    },
    {
      title: 'Second Problem',
      description:'Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.'
    },
    {
      title:'Third Problem',
      description:'Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.'
    }
  ]
}
