import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VHelpComponent } from './v-help.component';

describe('VHelpComponent', () => {
  let component: VHelpComponent;
  let fixture: ComponentFixture<VHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
