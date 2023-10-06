import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdDirective } from './dynamic-component-loader/ad.directive';
import { AdBannerComponent } from './dynamic-component-loader/ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './dynamic-component-loader/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './dynamic-component-loader/hero-profile/hero-profile.component';
import { FormsModule } from '@angular/forms';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA ]
})
export class AppModule { }
