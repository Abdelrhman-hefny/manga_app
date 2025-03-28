import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaInfoComponent } from './manga-info.component';

describe('MangaInfoComponent', () => {
  let component: MangaInfoComponent;
  let fixture: ComponentFixture<MangaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangaInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MangaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
