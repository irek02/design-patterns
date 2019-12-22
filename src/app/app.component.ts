import * as moment from 'moment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = (new Foo()).getName();
  shippingOptions = ['overnight', 'standard'];
  selectedOption = null;
  estimatedDelivery = null;

  select(option) {
    this.selectedOption = option;
    if (option == 'overnight') {
      this.estimatedDelivery = moment().add(1, 'day').format('MMMM D, Y');
    }
    else if (option == 'standard') {
      this.estimatedDelivery = moment().add(3, 'day').format('MMMM D, Y');
    }
  }
}

class Foo {
  getName() {
    return 'hello';
  }
}
