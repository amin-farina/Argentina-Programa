import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacsComponent } from './vacs.component';

describe('VacsComponent', () => {
  let component: VacsComponent;
  let fixture: ComponentFixture<VacsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
