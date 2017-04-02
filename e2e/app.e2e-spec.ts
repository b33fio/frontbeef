import { FrontbeefPage } from './app.po';

describe('frontbeef App', () => {
  let page: FrontbeefPage;

  beforeEach(() => {
    page = new FrontbeefPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
