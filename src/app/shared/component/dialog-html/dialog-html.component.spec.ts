import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHtmlComponent } from './dialog-html.component';

describe('DialogHtmlComponent', () => {
  let component: DialogHtmlComponent;
  let fixture: ComponentFixture<DialogHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogHtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
