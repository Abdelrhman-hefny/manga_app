import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastUpdateComponent } from './last-update.component';

describe('LastUpdateComponent', () => {
  let component: LastUpdateComponent;
  let fixture: ComponentFixture<LastUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
