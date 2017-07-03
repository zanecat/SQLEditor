import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistPanelComponent } from './assist-panel.component';

describe('AssistPanelComponent', () => {
  let component: AssistPanelComponent;
  let fixture: ComponentFixture<AssistPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
