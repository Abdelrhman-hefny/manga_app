import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManhwaDetailsComponent } from './manhwa-details.component';

describe('ManhwaDetailsComponent', () => {
  let component: ManhwaDetailsComponent;
  let fixture: ComponentFixture<ManhwaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManhwaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManhwaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
