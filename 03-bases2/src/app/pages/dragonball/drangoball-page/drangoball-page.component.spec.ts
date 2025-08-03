import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrangoballPageComponent } from './drangoball-page.component';

describe('DrangoballPageComponent', () => {
  let component: DrangoballPageComponent;
  let fixture: ComponentFixture<DrangoballPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrangoballPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrangoballPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
