import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ReportageDetailComponent } from "./report-detail.component";

describe("ReportageDetailComponent", () => {
  let component: ReportageDetailComponent;
  let fixture: ComponentFixture<ReportageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReportageDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
