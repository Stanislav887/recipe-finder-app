import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeefPage } from './beef.page';

describe('BeefPage', () => {
  let component: BeefPage;
  let fixture: ComponentFixture<BeefPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BeefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
