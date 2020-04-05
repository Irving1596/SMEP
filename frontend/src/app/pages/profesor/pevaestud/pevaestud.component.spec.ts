import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PevaestudComponent } from './pevaestudComponent.component';

describe('PevaestudComponent', () => {
  let component: PevaestudComponent;
  let fixture: ComponentFixture<PevaestudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PevaestudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PevaestudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
