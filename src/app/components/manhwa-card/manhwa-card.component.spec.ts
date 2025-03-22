import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManhwaCardComponent } from './manhwa-card.component';

describe('ManhwaCardComponent', () => {
  let component: ManhwaCardComponent;
  let fixture: ComponentFixture<ManhwaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManhwaCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManhwaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 //add new git hub