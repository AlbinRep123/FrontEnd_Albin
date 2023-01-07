import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanentrenamientoinfoPage } from './planentrenamientoinfo.page';

describe('PlanentrenamientoinfoPage', () => {
  let component: PlanentrenamientoinfoPage;
  let fixture: ComponentFixture<PlanentrenamientoinfoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanentrenamientoinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanentrenamientoinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
