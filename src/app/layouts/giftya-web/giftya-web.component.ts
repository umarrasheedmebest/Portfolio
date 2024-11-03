import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ColorScssService } from '../../shared/service/color-scss.service';

@Component({
  selector: 'app-giftya-web',
  templateUrl: './giftya-web.component.html',
  styleUrls: ['./giftya-web.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GiftyaWebComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private title: Title,
    public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
    this.colorPicker.setColorScheme('color-1');
  }

}
