import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giftya-web-screenshots',
  templateUrl: './giftya-web-screenshots.component.html',
  styleUrls: ['./giftya-web-screenshots.component.scss']
})
export class GiftyaWebScreenshotsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  screenshots=
  [
    {
      img:"assets/images/resume/giftya-web/giftya-web-4.png"
    },
    {
      img:"assets/images/resume/giftya-web/giftya-web-5.png"
    },
    {
      img:"assets/images/resume/giftya-web/giftya-web-6.png"
    },
    {
      img:"assets/images/resume/giftya-web/giftya-web-7.png"
    },
    {
      img:"assets/images/resume/giftya-web/giftya-web-8.png"
    },
    {
      img:"assets/images/resume/giftya-web/giftya-web-9.png"
    },
]

    screenshotscarouselOptions= {
      items: 3,
      margin: 0,
      autoHeight: true,
      nav: false,
      autoplay: true,
      center: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      dots: true,
      loop: true,
      responsive: {
          0: {
              items: 1
          },
          992: {
              items: 3
          }
      }
  }

}
