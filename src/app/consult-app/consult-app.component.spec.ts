import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultAppComponent } from './consult-app.component';

describe('ConsultAppComponent', () => {
  let component: ConsultAppComponent;
  let fixture: ComponentFixture<ConsultAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
