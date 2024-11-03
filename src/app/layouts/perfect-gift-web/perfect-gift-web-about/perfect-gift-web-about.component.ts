import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfect-gift-web-about',
  templateUrl: './perfect-gift-web-about.component.html',
  styleUrls: ['./perfect-gift-web-about.component.scss']
})
export class PerfectGiftWebAboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

features = [
  {
    img:'assets/images/resume/icon/1.png',
    title: 'Clean Design',
    description: 'Lorem Ipsum is simply dummy text of the printing and industry.'
  },
  {
    img:'assets/images/resume/icon/1.png',
    title: 'Dedicated Support',
    description: 'Lorem Ipsum is simply dummy text of the printing and industry.'
  },
  {
    img:'assets/images/resume/icon/1.png',
    title: 'Easy Customiable',
    description: 'Lorem Ipsum is simply dummy text of the printing and industry.'
  },
  {
    img:'assets/images/resume/icon/1.png',
    title: 'Multiple Demo',
    description: 'Lorem Ipsum is simply dummy text of the printing and industry.'
  }
]
}
