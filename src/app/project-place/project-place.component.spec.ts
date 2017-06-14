import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPlaceComponent } from './project-place.component';

describe('ProjectPlaceComponent', () => {
  let component: ProjectPlaceComponent;
  let fixture: ComponentFixture<ProjectPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
