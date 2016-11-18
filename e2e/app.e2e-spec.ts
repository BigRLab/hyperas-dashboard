import { Kv001Page } from './app.po';

describe('kv001 App', function() {
  let page: Kv001Page;

  beforeEach(() => {
    page = new Kv001Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
