import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Menu
export interface Menu {
   path?: string;
   title?: string;
   type?: string;
   icon?: string;
   badgeType?: string;
   badgeValue?: string;
   active?: boolean;
   megaMenu?: boolean;
   megaMenuType?: string; // small, medium, large
   bookmark?: boolean;
   children?: Menu[];
}

@Injectable({
   providedIn: 'root'
})
export class NavService {

   constructor() { }

   MENUITEMS: Menu[] = [
      // {
      //    title: 'Portfolio', type: 'link', path: '/resume'
      // },
      // {
      //    title: 'About', type: 'link', path: '/about'
      // },
      // {
      //    title: 'Portfolio', type: 'link', path: '/portfolio'
      // },
      // {
      //    title: 'Blog', type: 'link', path: '/resume'
      // },
      // {
      //    title: 'Contact', type: 'link', path: '/contact'
      // },
   ]

   // Array
   items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

}
