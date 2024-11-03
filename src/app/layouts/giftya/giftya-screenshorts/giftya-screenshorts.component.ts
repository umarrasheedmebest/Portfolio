import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giftya-screenshort',
  templateUrl: './giftya-screenshorts.component.html',
  styleUrls: ['./giftya-screenshorts.component.scss']
})
export class GiftyaScreenshortsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  screenshots = [
    { img: "assets/images/resume/application/1-1.png" },
    { img: "assets/images/resume/application/1-2.png" },
    { img: "assets/images/resume/application/1-5.png" },
    { img: "assets/images/resume/application/1-2.png" }

  ]
  
  screenshotscarouselOptions= {
    items: 3,
    margin: 55,
    autoHeight: true,
    nav: false,
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        360: {
            items: 2,
            margin: 10
        },
        480: {
            margin: 15
        },
        576: {
            margin: 15
        },
        1000: {
            items: 3
        }
    }
  }
}
