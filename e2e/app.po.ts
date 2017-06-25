import { browser, by, element } from 'protractor';

export class TrunoutPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('root h1')).getText();
  }
}
