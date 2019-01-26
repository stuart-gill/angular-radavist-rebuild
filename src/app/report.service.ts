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
}
