import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Components to add to the router.
import { ExampleComponent } from "./example/example.component";
import { AboutComponent } from "./about/about.component";
import { RadarComponent } from "./radar/radar.component";
import { ReportageComponent } from "./reportage/reportage.component";
import { ShopComponent } from "./shop/shop.component";
import { VideosComponent } from "./videos/videos.component";
import { ReportageDetailComponent } from "./reportage-detail/reportage-detail.component";

const appRoutes: Routes = [
  {
    path: "",
    component: ExampleComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "radar",
    component: RadarComponent
  },
  {
    path: "reportage",
    component: ReportageComponent
  },
  {
    path: "reportage/:id",
    component: ReportageDetailComponent
  },
  {
    path: "shop",
    component: ShopComponent
  },
  {
    path: "videos",
    component: VideosComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
