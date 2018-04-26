import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsRowComponent } from './assets-row.component';

describe('AssetsRowComponent', () => {
  let component: AssetsRowComponent;
  let fixture: ComponentFixture<AssetsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
