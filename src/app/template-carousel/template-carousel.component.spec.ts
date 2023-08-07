import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCarouselComponent } from './template-carousel.component';

describe('TemplateCarouselComponent', () => {
  let component: TemplateCarouselComponent;
  let fixture: ComponentFixture<TemplateCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateCarouselComponent]
    });
    fixture = TestBed.createComponent(TemplateCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
