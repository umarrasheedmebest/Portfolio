import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ColorScssService } from '../../shared/service/color-scss.service';

@Component({
  selector: 'app-granny',
  templateUrl: './granny.component.html',
  styleUrls: ['./granny.component.scss']
})
export class GrannyComponent implements OnInit {

  constructor(public colorPicker: ColorScssService, private route: ActivatedRoute,
    private title: Title) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('color-1');
    this.title.setTitle(this.route.snapshot.data['title']);
  }

}