import { Component, Input, OnInit } from "@angular/core";
import { ReportService } from "../report.service";

@Component({
  selector: "app-edit-report",
  templateUrl: "./edit-report.component.html",
  styleUrls: ["./edit-report.component.css"],
  providers: [ReportService]
})
export class EditReportComponent implements OnInit {
  @Input() selectedReport;

  constructor(private reportService: ReportService) {}

  ngOnInit() {}

  //actual update function is updateReport, called here and defined in report.service
  beginUpdatingReport(reportToUpdate) {
    this.reportService.updateReport(reportToUpdate);
  }
}
