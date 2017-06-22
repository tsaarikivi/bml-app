import { BmlPage } from './app.po';

describe('bml App', () => {
  let page: BmlPage;

  beforeEach(() => {
    page = new BmlPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
