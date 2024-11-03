import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions, EffectCards  } from 'swiper';
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-clublex-testimonial',
  templateUrl: './clublex-testimonial.component.html',
  styleUrls: ['./clublex-testimonial.component.scss']
})
export class ClublexTestimonialComponent implements OnInit {

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
      { img: 'assets/images/resume/clublax/clublax-1.png'},
      { img: 'assets/images/resume/clublax/clublax-2.png'},
      { img: 'assets/images/resume/clublax/clublax-3.png'},
    ]
  }
  
