import { Injectable } from "@angular/core";
import { Report } from "./report.model";

import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database";

@Injectable()
export class ReportService {
  reports: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.reports = database.list("reports");
  }

  getReports() {
    return this.reports;
  }

  addReport(newReport: Report) {
    this.reports.push(newReport);
  }

  getReportById(reportId: string) {
    return this.database.object("/reports/" + reportId);
  }

  updateReport(localUpdatedReport) {
    var reportEntryInFirebase = this.getReportById(localUpdatedReport.$key);
    reportEntryInFirebase.update({
      title: localUpdatedReport.title,
      author: localUpdatedReport.author,
      reportText: localUpdatedReport.reportText,
      photos: localUpdatedReport.photos
    });
  }

  deleteReport(localReportToDelete) {
    var reportEntryInFirebase = this.getReportById(localReportToDelete.$key);
    reportEntryInFirebase.remove();
  }
}
