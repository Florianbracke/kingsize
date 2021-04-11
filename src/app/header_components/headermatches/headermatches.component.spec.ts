import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadermatchesComponent } from './headermatches.component';

describe('HeadermatchesComponent', () => {
  let component: HeadermatchesComponent;
  let fixture: ComponentFixture<HeadermatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadermatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadermatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
