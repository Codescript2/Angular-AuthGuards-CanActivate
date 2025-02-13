import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardChildComponent } from './standard-child.component';

describe('StandardChildComponent', () => {
  let component: StandardChildComponent;
  let fixture: ComponentFixture<StandardChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
