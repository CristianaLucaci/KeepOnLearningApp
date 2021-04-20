import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCategoryMenuComponent } from './offer-category-menu.component';

describe('OfferCategoryMenuComponent', () => {
  let component: OfferCategoryMenuComponent;
  let fixture: ComponentFixture<OfferCategoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferCategoryMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
