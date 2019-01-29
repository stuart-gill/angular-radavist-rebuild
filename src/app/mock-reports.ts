import { Report } from "./report.model";

export const REPORTS: Report[] = [
  new Report("Title", "Author", "ReportText"),
  new Report(
    "Dispatches from the Veld: On the Road to the Pontchâteau World Cup",
    "Andrew Juiliano",
    "This articles text"
  ),
  new Report("Shared Territory: Iceland", "Ian Matteson", "Iceland story text"),
  new Report(
    "Capability and Affordability with the Cannondale Topstone All Road",
    "",
    "Cannondale article text"
  )
];
