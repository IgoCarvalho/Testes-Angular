import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTabelaComponent } from './time-tabela.component';

describe('TimeTabelaComponent', () => {
  let component: TimeTabelaComponent;
  let fixture: ComponentFixture<TimeTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
