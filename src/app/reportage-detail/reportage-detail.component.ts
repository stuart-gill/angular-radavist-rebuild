import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { Report } from "../report.model";

@Component({
  selector: "app-reportage-detail",
  templateUrl: "./reportage-detail.component.html",
  styleUrls: ["./reportage-detail.component.css"]
})
export class ReportageDetailComponent implements OnInit {
  reportId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.forEach(urlParameters => {
      this.reportId = parseInt(urlParameters["id"]);
    });
  }
}
