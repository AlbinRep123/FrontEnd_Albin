import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanentrenamientoeditPage } from './planentrenamientoedit.page';

describe('PlanentrenamientoeditPage', () => {
  let component: PlanentrenamientoeditPage;
  let fixture: ComponentFixture<PlanentrenamientoeditPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanentrenamientoeditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanentrenamientoeditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
