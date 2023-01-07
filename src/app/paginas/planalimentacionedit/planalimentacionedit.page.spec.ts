import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanalimentacioneditPage } from './planalimentacionedit.page';

describe('PlanalimentacioneditPage', () => {
  let component: PlanalimentacioneditPage;
  let fixture: ComponentFixture<PlanalimentacioneditPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanalimentacioneditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanalimentacioneditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
