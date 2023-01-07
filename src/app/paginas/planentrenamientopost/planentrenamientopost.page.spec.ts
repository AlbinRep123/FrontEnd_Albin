import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanentrenamientopostPage } from './planentrenamientopost.page';

describe('PlanentrenamientopostPage', () => {
  let component: PlanentrenamientopostPage;
  let fixture: ComponentFixture<PlanentrenamientopostPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanentrenamientopostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanentrenamientopostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
