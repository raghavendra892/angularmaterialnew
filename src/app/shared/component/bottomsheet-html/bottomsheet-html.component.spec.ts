import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomsheetHtmlComponent } from './bottomsheet-html.component';

describe('BottomsheetHtmlComponent', () => {
  let component: BottomsheetHtmlComponent;
  let fixture: ComponentFixture<BottomsheetHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomsheetHtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomsheetHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
