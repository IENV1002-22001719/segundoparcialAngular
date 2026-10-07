import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaAlumno } from './lista-alumnos';

describe('ListaAlumno', () => {
  let component: ListaAlumno;
  let fixture: ComponentFixture<ListaAlumno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAlumno],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaAlumno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
