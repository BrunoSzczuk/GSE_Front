import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubGrupoProdutoComponent } from './sub-grupo-produto.component';

describe('SubGrupoProdutoComponent', () => {
  let component: SubGrupoProdutoComponent;
  let fixture: ComponentFixture<SubGrupoProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubGrupoProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubGrupoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
