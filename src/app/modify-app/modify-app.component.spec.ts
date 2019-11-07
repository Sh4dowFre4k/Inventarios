import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAppComponent } from './modify-app.component';

describe('ModifyAppComponent', () => {
  let component: ModifyAppComponent;
  let fixture: ComponentFixture<ModifyAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
