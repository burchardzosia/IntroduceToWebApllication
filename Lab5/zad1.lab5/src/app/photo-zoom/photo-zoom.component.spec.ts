import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoZoomComponent } from './photo-zoom.component';

describe('PhotoZoomComponent', () => {
  let component: PhotoZoomComponent;
  let fixture: ComponentFixture<PhotoZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoZoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
