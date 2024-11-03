import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// layouts Components 
import { GiftyaComponent } from './giftya/giftya.component';
import { ClublexComponent } from './clublex/clublex.component';
import { FertComponent } from './fert/fert.component';
import { NextComponent } from './Next/Next.component';
import { GrannyComponent } from './granny/granny.component';
import { GiftyaWebComponent } from './giftya-web/giftya-web.component';
import { ResumeComponent } from './resume/resume.component';
import { PerfectGiftWebComponent } from './perfect-gift-web/perfect-gift-web.component';


const routes: Routes = [
  {
    path: 'giftya',
    component: GiftyaComponent,
    data: {
      title: "Giftya | Umar Rasheed"
    }
  },
  {
    path: 'clublax',
    component: ClublexComponent,
    data: {
      title: "clublax | Umar Rasheed"
    }
  },
  {
    path: 'fert',
    component: FertComponent,
    data: {
      title: "fert | Umar Rasheed"
    }
  },
  {
    path: 'granny',
    component: GrannyComponent,
    data: {
      title: "granny | Umar Rasheed"
    }
  },
  {
    path: 'next',
    component: NextComponent,
    data: {
      title: "next | Umar Rasheed"
    }
  },
  {
    path: 'giftyaweb',
    component: GiftyaWebComponent,
    data: {
      title: "giftya web | Umar Rasheed"
    }
  },
  {
    path: 'perfectgiftweb',
    component: PerfectGiftWebComponent,
    data: {
      title: "Perfect Gift web | Umar Rasheed"
    }
  },
  {
    path: 'resume',
    component: ResumeComponent,
    data: {
      title: "Resume | Umar Rasheed"
    }
  },


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
