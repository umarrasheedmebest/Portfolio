import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperModule } from 'swiper/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMasonryModule } from 'ngx-masonry';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Ng5SliderModule } from 'ng5-slider';
import { SharedModule } from '../shared/shared.module'
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

// Giftya Layout
import { GiftyaComponent } from './giftya/giftya.component';
import { GiftyaNavComponent } from './giftya/giftya-nav/giftya-nav.component';
import { GiftyaHeaderComponent } from './giftya/giftya-header/giftya-header.component';
import { GiftyaAboutComponent } from './giftya/giftya-about/giftya-about.component';
import { GiftyaViewOneComponent } from './giftya/giftya-view-one/giftya-view-one.component';
import { GiftyaViewTwoComponent } from './giftya/giftya-view-two/giftya-view-two.component';
import { GiftyaViewThreeComponent } from './giftya/giftya-view-three/giftya-view-three.component';
import { GiftyaScreenshortsComponent } from './giftya/giftya-screenshorts/giftya-screenshorts.component';
import { GiftyaBMIComponent } from './giftya/giftya-bmi/giftya-bmi.component';
import { GiftyaTestimonialComponent } from './giftya/giftya-testimonial/giftya-testimonial.component';
import { GiftyaFooterComponent } from './giftya/giftya-footer/giftya-footer.component';

// Clublex Layout
import { ClublexComponent } from './clublex/clublex.component';
import { ClublexNavComponent } from './clublex/clublex-nav/clublex-nav.component';
import { ClublexHeaderComponent } from './clublex/clublex-header/giftya-header.component';
import { ClublexAboutComponent } from './clublex/clublex-about/clublex-about.component';
import { ClublexViewOneComponent } from './clublex/clublex-view-one/giftya-view-one.component';
import { ClublexViewTwoComponent } from './clublex/clublex-view-two/clublex-view-two.component';
import { ClublexBMIComponent } from './clublex/clublex-bmi/giftya-bmi.component';
import { ClublexTestimonialComponent } from './clublex/clublex-testimonial/clublex-testimonial.component';
import { ClublexFooterComponent } from './clublex/clublex-footer/clublex-footer.component';

// Fert Layout
import { FertComponent } from './fert/fert.component';
import { FertNavComponent } from './fert/fert-nav/fert-nav.component';
import { FertHeaderComponent } from './fert/fert-header/fert-header.component';
import { FertAboutComponent } from './fert/fert-about/fert-about.component';
import { FertViewOneComponent } from './fert/fert-view-one/fert-view-one.component';
import { FertViewTwoComponent } from './fert/fert-view-two/fert-view-two.component';
import { FertBMIComponent } from './fert/fert-bmi/fert-bmi.component';
import { FertTestimonialComponent } from './fert/fert-testimonial/fert-testimonial.component';
import { FertFooterComponent } from './fert/fert-footer/fert-footer.component';

// Granny Layout
import { GrannyComponent } from './granny/granny.component';
import { GrannyNavComponent } from './granny/granny-nav/granny-nav.component';
import { GrannyHeaderComponent } from './granny/granny-header/granny-header.component';
import { GrannyAboutComponent } from './granny/granny-about/granny-about.component';
import { GrannyViewOneComponent } from './granny/granny-view-one/granny-view-one.component';
import { GrannyViewTwoComponent } from './granny/granny-view-two/granny-view-two.component';
import { GrannyBMIComponent } from './granny/granny-bmi/granny-bmi.component';
import { GrannyTestimonialComponent } from './granny/granny-testimonial/granny-testimonial.component';
import { GrannyFooterComponent } from './granny/granny-footer/granny-footer.component';

// Next Layout
import { NextComponent } from './Next/Next.component';
import { NextNavComponent } from './Next/Next-nav/Next-nav.component';
import { NextHeaderComponent } from './Next/Next-header/Next-header.component';
import { NextAboutComponent } from './Next/Next-about/Next-about.component';
import { NextViewOneComponent } from './Next/Next-view-one/Next-view-one.component';
import { NextViewTwoComponent } from './Next/Next-view-two/Next-view-two.component';
import { NextBMIComponent } from './Next/Next-bmi/Next-bmi.component';
import { NextTestimonialComponent } from './Next/Next-testimonial/Next-testimonial.component';
import { NextFooterComponent } from './Next/Next-footer/next-footer.component';

// Giftya Web Layout
import { GiftyaWebComponent } from './giftya-web/giftya-web.component';
import { GiftyaWebNavComponent } from './giftya-web/giftya-web-nav/giftya-web-nav.component';
import { GiftyaWebHeaderComponent } from './giftya-web/giftya-web-header/giftya-web-header.component';
import { GiftyaWebAboutComponent } from './giftya-web/giftya-web-about/giftya-web-about.component';
import { GiftyaWebFeatureComponent } from './giftya-web/giftya-web-feature/giftya-web-feature.component';
import { GiftyaWebScreenshotsComponent } from './giftya-web/giftya-web-screenshots/giftya-web-screenshots.component';
import { GiftyaWebFooterComponent } from './giftya-web/giftya-web-footer/giftya-web-footer.component';
// Giftya Web Layout
import { PerfectGiftWebComponent } from './perfect-gift-web/perfect-gift-web.component';
import { PerfectGiftWebNavComponent } from './perfect-gift-web/perfect-gift-web-nav/perfect-gift-web-nav.component';
import { PerfectGiftWebHeaderComponent } from './perfect-gift-web/perfect-gift-web-header/perfect-gift-web-header.component';
import { PerfectGiftWebAboutComponent } from './perfect-gift-web/perfect-gift-web-about/perfect-gift-web-about.component';
import { PerfectGiftWebFeatureComponent } from './perfect-gift-web/perfect-gift-web-feature/perfect-gift-web-feature.component';
import { PerfectGiftWebScreenshotsComponent } from './perfect-gift-web/perfect-gift-web-screenshots/perfect-gift-web-screenshots.component';
import { PerfectGiftWebFooterComponent } from './perfect-gift-web/perfect-gift-web-footer/perfect-gift-web-footer.component';

// Resume Layout
import { ResumeComponent } from './resume/resume.component';
import { ResumeNavComponent } from './resume/resume-nav/resume-nav.component';
import { ResumeHeaderComponent } from './resume/resume-header/resume-header.component';
import { ResumeAboutComponent } from './resume/resume-about/resume-about.component';
import { ResumeServicesComponent } from './resume/resume-services/resume-services.component';
import { ResumePortfolioComponent } from './resume/resume-portfolio/resume-portfolio.component';
import { ResumeCounterComponent } from './resume/resume-counter/resume-counter.component';
import { ResumeScheduleComponent } from './resume/resume-schedule/resume-schedule.component';
import { ResumetesTimonialComponent } from './resume/resume-testimonial/resume-testimonial.component';
import { ResumeSubscribeComponent } from './resume/resume-subscribe/resume-subscribe.component';
import { ResumeFooterComponent } from './resume/resume-footer/resume-footer.component';

@NgModule({
  declarations: [
    // giftya 
    GiftyaComponent, GiftyaNavComponent, GiftyaHeaderComponent, GiftyaAboutComponent, GiftyaViewOneComponent, GiftyaViewTwoComponent,
    GiftyaViewThreeComponent, GiftyaScreenshortsComponent, GiftyaBMIComponent, GiftyaTestimonialComponent, GiftyaFooterComponent,
    // clublex
    ClublexComponent, ClublexNavComponent, ClublexHeaderComponent, ClublexAboutComponent, ClublexViewOneComponent,
    ClublexViewTwoComponent, ClublexBMIComponent, ClublexTestimonialComponent, ClublexFooterComponent,
    // fert
    FertComponent, FertNavComponent, FertHeaderComponent, FertAboutComponent, FertViewOneComponent,
    FertViewTwoComponent, FertBMIComponent, FertTestimonialComponent, FertFooterComponent,
    // granny
    GrannyComponent, GrannyNavComponent, GrannyHeaderComponent, GrannyAboutComponent, GrannyViewOneComponent,
    GrannyViewTwoComponent, GrannyBMIComponent, GrannyTestimonialComponent, GrannyFooterComponent,
    // Next
    NextComponent, NextNavComponent, NextHeaderComponent, NextAboutComponent, NextViewOneComponent,
    NextViewTwoComponent, NextBMIComponent, NextTestimonialComponent, NextFooterComponent,
    // giftya web 
    GiftyaWebComponent, GiftyaWebNavComponent, GiftyaWebHeaderComponent, GiftyaWebAboutComponent, GiftyaWebFeatureComponent,
    GiftyaWebScreenshotsComponent, GiftyaWebFooterComponent,
    // prerfect gift web 
    PerfectGiftWebComponent, PerfectGiftWebNavComponent, PerfectGiftWebHeaderComponent, PerfectGiftWebAboutComponent, PerfectGiftWebFeatureComponent,
    PerfectGiftWebScreenshotsComponent, PerfectGiftWebFooterComponent,
    // resume 
    ResumeComponent, ResumeNavComponent, ResumeHeaderComponent, ResumeAboutComponent, ResumeServicesComponent, ResumePortfolioComponent,
    ResumeCounterComponent, ResumeScheduleComponent, ResumetesTimonialComponent, ResumeSubscribeComponent, ResumeFooterComponent
  ],

  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SwiperModule,
    CarouselModule,
    NgbModule,
    GalleryModule,
    LightboxModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    // Ng5SliderModule,
    NgxMasonryModule
  ],

  exports: [],
})

export class LayoutsModule { }
