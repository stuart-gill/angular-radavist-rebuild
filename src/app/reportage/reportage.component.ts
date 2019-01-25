import { Component, OnInit } from "@angular/core";
import { Report } from "../report.model";

@Component({
  selector: "app-reportage",
  templateUrl: "./reportage.component.html",
  styleUrls: ["./reportage.component.css"]
})
export class ReportageComponent implements OnInit {
  reports: Report[] = [
    new Report("Title", "Author", "ReportText", 1),
    new Report(
      "Dispatches from the Veld: On the Road to the Pontchâteau World Cup",
      "Andrew Juiliano",
      "This articles text",
      2
    ),
    new Report(
      "Shared Territory: Iceland",
      "Ian Matteson",
      "Iceland story text",
      3
    ),
    new Report(
      "Capability and Affordability with the Cannondale Topstone All Road",
      "",
      "Cannondale article text",
      4
    )
  ];

  ngOnInit() {}
}
