import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions, EffectCards  } from 'swiper';
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-next-testimonial',
  templateUrl: './next-testimonial.component.html',
  styleUrls: ['./next-testimonial.component.scss']
})
export class NextTestimonialComponent implements OnInit {

  public index: any;
  
    constructor() { }
  
    ngOnInit() {  }
  
    public config: SwiperOptions = {
          effect: 'coverflow',
          loop: true,
          centeredSlides: true,
          slidesPerView: 3,
          keyboard: true,
          mousewheel: true,
          preventClicks: true,
          preventClicksPropagation: true,
          coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1.43,
              slideShadows: true
          },
          breakpoints: {
              1199: {
                  slidesPerView: 3,
                  spaceBetween: -60
              },
              991: {
                  slidesPerView: 4
              },
              767: {
                  slidesPerView: 3
              },
              575: {
                  slidesPerView: 2
              }
          },
          autoplay: {
              delay: 1000,
              disableOnInteraction: true
          },
          pagination: {
              el: '.swiper-pagination'
          }
    };
  
    public slides = [
      { img: 'assets/images/resume/next/next-1.png'},
      { img: 'assets/images/resume/next/next-2.png'},
      { img: 'assets/images/resume/next/next-3.png'},
      { img: 'assets/images/resume/next/next-4.png'},
    ]
  }
  
