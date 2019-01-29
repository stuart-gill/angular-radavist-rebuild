import { Component, OnInit } from "@angular/core";
import { Report } from "../report.model";
import { Router } from "@angular/router";
import { ReportService } from "../report.service";
import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: "app-reportage",
  templateUrl: "./reportage.component.html",
  styleUrls: ["./reportage.component.css"],
  providers: [ReportService]
})
export class ReportageComponent implements OnInit {
  reports: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private reportService: ReportService) {}

  ngOnInit() {
    this.reports = this.reportService.getReports();
  }

  goToDetailPage(clickedReport) {
    this.router.navigate(["reports", clickedReport.$key]);
  }
}
