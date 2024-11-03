import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfect-gift-web-screenshots',
  templateUrl: './perfect-gift-web-screenshots.component.html',
  styleUrls: ['./perfect-gift-web-screenshots.component.scss']
})
export class PerfectGiftWebScreenshotsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  screenshots=
  [
    {
      img:"assets/images/resume/perfect-gift-web/perfect-gift-4.png"
    },
    {
      img:"assets/images/resume/perfect-gift-web/perfect-gift-5.png"
    },
    {
      img:"assets/images/resume/perfect-gift-web/perfect-gift-6.png"
    },
    {
      img:"assets/images/resume/perfect-gift-web/perfect-gift-7.png"
    },
    {
      img:"assets/images/resume/perfect-gift-web/perfect-gift-8.png"
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
