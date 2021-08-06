import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolaChurchComponent } from './mola-church.component';

describe('MolaChurchComponent', () => {
  let component: MolaChurchComponent;
  let fixture: ComponentFixture<MolaChurchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolaChurchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolaChurchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
