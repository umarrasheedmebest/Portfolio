import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-counter',
  templateUrl: './resume-counter.component.html',
  styleUrls: ['./resume-counter.component.scss']
})
export class ResumeCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  brands = [
    { img: "assets/images/resume/technologies/1.svg" },
    { img: "assets/images/resume/technologies/2.svg" },
    { img: "assets/images/resume/technologies/3.svg" },
    { img: "assets/images/resume/technologies/4.svg" },
    { img: "assets/images/resume/technologies/5.svg" },
    { img: "assets/images/resume/technologies/6.svg" },
    { img: "assets/images/resume/technologies/7.svg" },
    { img: "assets/images/resume/technologies/8.svg" },
    { img: "assets/images/resume/technologies/9.svg" },
    { img: "assets/images/resume/technologies/10.svg" }
  ]

  brandcarouselOptions = {
    items: 5,
    margin: 40,
    autoHeight: true,
    nav: false,
    dots: false,
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
      0: {
        items: 1,
        margin: 40
      },
      320: {
        items: 1,
        margin: 30
      },
      360: {
        items: 2,
        margin: 20
      },
      480: {
        items: 3,
        margin: 30
      },
      768: {
        items: 4,
        margin: 30
      },
      992: {
        items: 5
      }
    }
  }
}
