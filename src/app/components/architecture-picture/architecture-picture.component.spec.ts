import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitecturePictureComponent } from './architecture-picture.component';

describe('ArchitecturePictureComponent', () => {
  let component: ArchitecturePictureComponent;
  let fixture: ComponentFixture<ArchitecturePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchitecturePictureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchitecturePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
