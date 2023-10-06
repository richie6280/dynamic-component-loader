import { Component, OnInit } from '@angular/core';
import { AdService } from './dynamic-component-loader/ad.service';
import { AdItem } from './dynamic-component-loader/ad-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ads: AdItem[] = [];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

  //input event / ngModel
  name: string = '';
  onKey(event: any) { 
    console.log(event.target.value)
  }

  // date pipe
  birthday = new Date(1988, 3, 15);
  toggle = true;

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

  //自訂pipe
  power!: number;
  factor!: number;
}
