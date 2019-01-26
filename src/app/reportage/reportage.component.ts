import { Component, OnInit } from "@angular/core";
import { Report } from "../report.model";
import { Router } from "@angular/router";
import { ReportService } from "../report.service";

@Component({
  selector: "app-reportage",
  templateUrl: "./reportage.component.html",
  styleUrls: ["./reportage.component.css"],
  providers: [ReportService]
})
export class ReportageComponent implements OnInit {
  constructor(private router: Router, private reportService: ReportService) {}

  reports: Report[];

  goToDetailPage(clickedReport: Report) {
    this.router.navigate(["reportage", clickedReport.id]);
  }

  ngOnInit() {
    this.reports = this.reportService.getReports();
  }
}
