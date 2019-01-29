import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { Report } from "../report.model";
import { ReportService } from "../report.service";
import { FirebaseObjectObservable } from "angularfire2/database";

@Component({
  selector: "app-reportage-detail",
  templateUrl: "./reportage-detail.component.html",
  styleUrls: ["./reportage-detail.component.css"],
  providers: [ReportService]
})
export class ReportDetailComponent implements OnInit {
  reportId: string;
  reportToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private reportService: ReportService
  ) {}

  ngOnInit() {
    this.route.params.forEach(urlParameters => {
      this.reportId = urlParameters["id"];
    });
    this.reportToDisplay = this.reportService.getReportById(this.reportId);
  }
}
