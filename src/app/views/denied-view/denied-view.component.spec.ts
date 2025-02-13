import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeniedViewComponent } from './denied-view.component';

describe('DeniedViewComponent', () => {
  let component: DeniedViewComponent;
  let fixture: ComponentFixture<DeniedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeniedViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeniedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
