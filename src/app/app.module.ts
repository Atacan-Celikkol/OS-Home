import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { AddBookmarkItemButtonComponent } from './components/body/add-bookmark-item-button/add-bookmark-item-button.component';
import { AddFooterBookmarkItemButtonComponent } from './components/footer/add-footer-bookmark-item-button/add-footer-bookmark-item-button.component';
import { CommonComponentsModule } from './core/common-components/common-components.module';

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
    FooterBookmarkItemComponent,
    AddBookmarkItemButtonComponent,
    AddFooterBookmarkItemButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
