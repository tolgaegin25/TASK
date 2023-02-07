import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent {
  changeCheckBox() {
    if ($('#boxcheck').prop('checked')) {
      $('.monthly-price').css('display', 'none');
      $('.yearly-price').css('display', 'inline-block');
      $('.yearly-text').addClass('active');
      $('.monthly-text').removeClass('active');
    } else {
      $('.monthly-price').css('display', 'inline-block');
      $('.yearly-price').css('display', 'none');
      $('.yearly-text').removeClass('active');
      $('.monthly-text').addClass('active');
    }
  }
}
