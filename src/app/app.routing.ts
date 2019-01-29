import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Components to add to the router.
import { AboutComponent } from "./about/about.component";
import { RadarComponent } from "./radar/radar.component";
import { ReportageComponent } from "./reportage/reportage.component";
import { ShopComponent } from "./shop/shop.component";
import { VideosComponent } from "./videos/videos.component";
import { ReportDetailComponent } from "./report-detail/report-detail.component";
import { AdminComponent } from "./admin/admin.component";

const appRoutes: Routes = [
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
    path: "report/:id",
    component: ReportDetailComponent
  },
  {
    path: "shop",
    component: ShopComponent
  },
  {
    path: "videos",
    component: VideosComponent
  },
  {
    path: "admin",
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
