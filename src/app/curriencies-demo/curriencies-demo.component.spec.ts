import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrienciesDemoComponent } from './curriencies-demo.component';

describe('CurrienciesDemoComponent', () => {
  let component: CurrienciesDemoComponent;
  let fixture: ComponentFixture<CurrienciesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrienciesDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrienciesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
