import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ColorScssService } from '../../shared/service/color-scss.service';

@Component({
  selector: 'app-clublex',
  templateUrl: './clublex.component.html',
  styleUrls: ['./clublex.component.scss']
})
export class ClublexComponent implements OnInit {

  constructor(public colorPicker: ColorScssService, private route: ActivatedRoute,
    private title: Title) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('color-1');
    this.title.setTitle(this.route.snapshot.data['title']);
  }

}
