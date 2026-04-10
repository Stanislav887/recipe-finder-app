import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeafoodPage } from './seafood.page';

describe('SeafoodPage', () => {
  let component: SeafoodPage;
  let fixture: ComponentFixture<SeafoodPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeafoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
