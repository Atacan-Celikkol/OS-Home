import { Component } from '@angular/core';
import { CurrenciesResponse, Rates } from 'src/app/core/models/currency';
import { CurrencyService } from 'src/app/core/services/currency.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})

export class CurrenciesComponent {
  isLoading = false;
  data!: CurrenciesResponse;

  preferredCurrencies = [
    'USD',
    'EUR',
    'GBP',
    'JPY',
    // 'BTC',
  ];

  constructor(
    private currencyService: CurrencyService
  ) {
    currencyService.getCurrencies().subscribe(x => {
      this.data = x;
    });
  }
}
