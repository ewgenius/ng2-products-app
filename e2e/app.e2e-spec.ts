import { Ng2ProductsAppPage } from './app.po';

describe('ng2-products-app App', function() {
  let page: Ng2ProductsAppPage;

  beforeEach(() => {
    page = new Ng2ProductsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
