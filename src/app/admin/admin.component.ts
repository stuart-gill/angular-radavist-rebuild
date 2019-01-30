import { Component, OnInit } from "@angular/core";
import { ReportService } from "../report.service";
import { Report } from "../report.model";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
  providers: [ReportService]
})
export class AdminComponent implements OnInit {
  constructor(private reportService: ReportService) {}

  ngOnInit() {}

  submitForm(title: string, author: string, reportText: string) {
    var newReport: Report = new Report(title, author, reportText);
    this.reportService.addReport(newReport);
  }
}
