import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { AdItem } from '../ad-item';
import { AdDirective } from '../ad.directive';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})

export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[] = [];                                                // (1)
  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;               // (2)
  interval: any;                                                              // (3)
  currentAdIndex = -1;                                                        // (4)

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { } // (5)

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);                                             // (8)
  }

  loadComponent() {                                                           // (6)
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<{ data: any }>(componentFactory);
    componentRef.instance.data = adItem.data;
  }

  getAds() {                                                                  // (7)
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 1500);
  }
}
