import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialpadButtonComponent } from './dialpad-button.component';

describe('DialpadButtonComponent', () => {
  let component: DialpadButtonComponent;
  let fixture: ComponentFixture<DialpadButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialpadButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialpadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
