import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
//import { HttpModule } from '@angular/http';
import { routing } from "./app.routing";
//import { masterFirebaseConfig } from './api-keys';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireModule } from 'angularfire2';
import { AppComponent } from "./app.component";
import { ExampleComponent } from "./example/example.component";
import { AboutComponent } from "./about/about.component";
import { ReportageComponent } from "./reportage/reportage.component";
import { RadarComponent } from "./radar/radar.component";
import { VideosComponent } from "./videos/videos.component";
import { ShopComponent } from "./shop/shop.component";

// export const firebaseConfig = {
//   apiKey: masterFirebaseConfig.apiKey,
//   authDomain: masterFirebaseConfig.authDomain,
//   databaseURL: masterFirebaseConfig.databaseURL,
//   storageBucket: masterFirebaseConfig.storageBucket
// };
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
    routing,
    FormsModule
    //HttpModule,
    //AngularFireModule.initializeApp(firebaseConfig),
    //AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
