import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlerComponent } from './headler.component';

describe('HeadlerComponent', () => {
  let component: HeadlerComponent;
  let fixture: ComponentFixture<HeadlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
