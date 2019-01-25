import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { AboutComponent } from './about/about.component';
import { ReportageComponent } from './reportage/reportage.component';
import { RadarComponent } from './radar/radar.component';
import { VideosComponent } from './videos/videos.component';
import { ShopComponent } from './shop/shop.component';


//Add new Components to the declarations to initialize and add a component.
@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    AboutComponent,
    ReportageComponent,
    RadarComponent,
    VideosComponent,
    ShopComponent
  ],

  // Add modules to the imports.
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
