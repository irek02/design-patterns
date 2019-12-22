import * as moment from 'moment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Strategy';
  shippingOptions = ['express', 'standard'];
  selectedOption = null;
  estimatedDelivery = null;

  /////////////////////////////
  ////////// BEFORE ///////////
  /////////////////////////////

  // clickOnShippingMethod(option) {
  //   this.selectedOption = option;
  //   const shipping = new Shipping(option);
  //   this.estimatedDelivery = shipping.estimateDeliveryDate();
  // }

  /////////////////////////////
  ////////// AFTER ///////////
  /////////////////////////////

  clickOnShippingMethod(option) {
    this.selectedOption = option;
    let strategy;
    if (option == 'express') {
      strategy = new ExpressShippingStrategy();
    }
    else if (option == 'standard') {
      strategy = new StandardShippingStrategy();
    }
    const shipping = new Shipping(strategy);
    this.estimatedDelivery = shipping.estimateDeliveryDate();
  }
}

/////////////////////////////
////////// BEFORE ///////////
/////////////////////////////

// class Shipping {
//   constructor(public option) { }
//   estimateDeliveryDate() {
//     if (this.option == 'express') {
//       // Express shipping takes about two days.
//       return moment().add(2, 'day').format('MMMM D, Y');
//     }
//     else if (this.option == 'standard') {
//       // Standard shipping takes about 5 days.
//       return moment().add(5, 'day').format('MMMM D, Y');
//     }
//   }
// }

/////////////////////////////
////////// AFTER ///////////
/////////////////////////////

interface ShippingStrategy {
  estimateDeliveryDate(): string;
}

class ExpressShippingStrategy implements ShippingStrategy {
  estimateDeliveryDate() {
    // Express shipping takes about two days.
    return moment().add(2, 'day').format('MMMM D, Y');
  }
}

class StandardShippingStrategy implements ShippingStrategy {
  estimateDeliveryDate() {
    // Standard shipping takes about 5 days.
    return moment().add(5, 'day').format('MMMM D, Y');
  }
}

class Shipping {
  constructor(public strategy: ShippingStrategy) { }
  estimateDeliveryDate() {
    return this.strategy.estimateDeliveryDate();
  }
}
