import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMorphComponent } from './text-morph.component';

describe('TextMorphComponent', () => {
  let component: TextMorphComponent;
  let fixture: ComponentFixture<TextMorphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextMorphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextMorphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
