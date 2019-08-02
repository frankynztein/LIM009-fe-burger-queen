import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { LunchMenuComponent } from './lunch-menu.component';
import { FormsModule } from '@angular/forms';
import { MenuService } from '../services/menu.service';
import { OrdersService } from '../services/orders.service';
import { of } from 'rxjs';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

class MockMenuService {
  getItemsLunch() {
    return of([{
      id: '1',
      name: 'CheeseBurger',
      price: 10,
      image: 'https://google.com/'
    },
    {
      id: '12',
      name: 'Coca Cola',
      price: 5,
      image: 'https://google.com/'
    }])
  }
}

fdescribe('LunchMenuComponent', () => {
  let component: LunchMenuComponent;
  let fixture: ComponentFixture<LunchMenuComponent>;
  let serviceMenu: MenuService;
  let serviceOrder: OrdersService;
  let injector: TestBed;
  let fireMock: HttpTestingController;
  let debugElement: DebugElement;
  let template: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchMenuComponent ],
      imports: [ FormsModule, HttpClientTestingModule ],
      providers: [
        OrdersService,
        { provide: MenuService, useClass: MockMenuService }
        ]
    })
    .compileComponents();
    injector = getTestBed();
    serviceMenu = injector.get(MenuService);
    serviceOrder = injector.get(OrdersService);
    fireMock = injector.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fireMock.verify();
  });

  it('Should create LunchMenuComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia asignar un valor a itemsLunchMenu al crear el componente', () => {
    const dummyMenu = [{
      id: '1',
      name: 'CheeseBurger',
      price: 10,
      image: 'https://google.com/'
    },
    {
      id: '12',
      name: 'Coca Cola',
      price: 5,
      image: 'https://google.com/'
    }];

    serviceMenu.getItemsLunch().subscribe(item => {
      component.itemsLunchMenu = item;
      fixture.detectChanges();
    });

    expect(component.itemsLunchMenu).toEqual(dummyMenu);
  });

  it('Debería retornar el nombre del producto en la etiqueta h5', () => {
    debugElement = fixture.debugElement.query(By.css('h5'));
    template = debugElement.nativeElement;
    expect(template.textContent).toEqual('Burger');

    //Como reconocer una etiqueta en particular si hay varias h5
  });
});
