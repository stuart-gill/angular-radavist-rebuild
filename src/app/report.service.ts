import { Injectable } from "@angular/core";
import { Report } from "./report.model";
import { REPORTS } from "./mock-reports";

@Injectable({
  providedIn: "root"
})
export class ReportService {
  constructor() {}

  getReports() {
    return REPORTS;
  }

  getReportById(reportId: number) {
    for (var i = 0; i <= REPORTS.length - 1; i++) {
      if (REPORTS[i].id === reportId) {
        return REPORTS[i];
      }
    }
  }
}
