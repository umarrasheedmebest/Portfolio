import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ColorScssService } from '../../shared/service/color-scss.service';

@Component({
  selector: 'app-perfect-gift-web',
  templateUrl: './perfect-gift-web.component.html',
  styleUrls: ['./perfect-gift-web.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PerfectGiftWebComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private title: Title,
    public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
    this.colorPicker.setColorScheme('color-1');
  }

}
