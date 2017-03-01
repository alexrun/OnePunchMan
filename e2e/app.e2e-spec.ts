import { OnePunchManPage } from './app.po';

describe('one-punch-man App', () => {
  let page: OnePunchManPage;

  beforeEach(() => {
    page = new OnePunchManPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
