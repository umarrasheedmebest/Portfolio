import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giftya-web-feature',
  templateUrl: './giftya-web-feature.component.html',
  styleUrls: ['./giftya-web-feature.component.scss']
})
export class GiftyaWebFeatureComponent implements OnInit {

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
