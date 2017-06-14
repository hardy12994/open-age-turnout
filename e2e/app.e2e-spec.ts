import { AmsAdminPage } from './app.po';

describe('ams-admin App', () => {
  let page: AmsAdminPage;

  beforeEach(() => {
    page = new AmsAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
