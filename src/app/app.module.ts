import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { CurrenciesComponent } from './components/header/currencies/currencies.component';
import { BrandmarkComponent } from './components/header/brandmark/brandmark.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookmarkItemComponent } from './components/body/bookmark-item/bookmark-item.component';
import { CurrencyItemComponent } from './components/header/currencies/currency-item/currency-item.component';
import { FooterBookmarkItemComponent } from './components/footer/footer-bookmark-item/footer-bookmark-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SearchBarComponent,
    CurrenciesComponent,
    BrandmarkComponent,
    FooterComponent,
    BookmarkItemComponent,
    CurrencyItemComponent,
    FooterBookmarkItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
