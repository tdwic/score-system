import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewingComponentComponent} from './viewing-component.component';

describe('ViewingComponentComponent', () => {
  let component: ViewingComponentComponent;
  let fixture: ComponentFixture<ViewingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewingComponentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
