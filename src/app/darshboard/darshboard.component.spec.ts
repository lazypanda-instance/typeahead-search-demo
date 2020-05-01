import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarshboardComponent } from './darshboard.component';

describe('DarshboardComponent', () => {
  let component: DarshboardComponent;
  let fixture: ComponentFixture<DarshboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarshboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
