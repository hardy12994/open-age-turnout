import { TrunoutPage } from './app.po';

describe('trunout App', () => {
  let page: TrunoutPage;

  beforeEach(() => {
    page = new TrunoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
