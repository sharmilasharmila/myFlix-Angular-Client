import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynopsisComponenetComponent } from './synopsis-componenet.component';

describe('SynopsisComponenetComponent', () => {
  let component: SynopsisComponenetComponent;
  let fixture: ComponentFixture<SynopsisComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynopsisComponenetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynopsisComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
