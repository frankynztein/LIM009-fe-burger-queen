import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListComponent } from './order-list.component';

import { MenuService } from '../services/menu.service';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirestoreMock } from "../__mocks__/angular.firestore.mock";

const fixtureData = [
  {
    id: '1',
    data: {name: 'CheeseBurger',
    price: 10,
    image: 'https://google.com/',
    quantity: 1,
    priceTotal: 10}
  },
  {
    id: '2',
    data: {name: 'InkaCola',
    price: 5,
    image: 'https://google.com/',
    quantity: 1,
    priceTotal: 5}
  },
  {
    id: '3',
    data: {name: 'CocaCola',
    price: 5,
    image: 'https://google.com/',
    quantity: 1,
    priceTotal: 5}
  }
]

describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderListComponent ],
      providers: [
        {
          provide: AngularFirestore,
          useValue: new AngularFirestoreMock(fixtureData)
        }
      ],
      imports: [AngularFirestoreModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
