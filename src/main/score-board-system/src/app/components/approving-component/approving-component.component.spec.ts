import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ApprovingComponentComponent} from './approving-component.component';

describe('ApprovingComponentComponent', () => {
  let component: ApprovingComponentComponent;
  let fixture: ComponentFixture<ApprovingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApprovingComponentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
