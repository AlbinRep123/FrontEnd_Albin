import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanalimentacioninfoPage } from './planalimentacioninfo.page';

describe('PlanalimentacioninfoPage', () => {
  let component: PlanalimentacioninfoPage;
  let fixture: ComponentFixture<PlanalimentacioninfoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanalimentacioninfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanalimentacioninfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
