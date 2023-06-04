import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridlistnComponent } from './gridlistn.component';

describe('GridlistnComponent', () => {
  let component: GridlistnComponent;
  let fixture: ComponentFixture<GridlistnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridlistnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridlistnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
