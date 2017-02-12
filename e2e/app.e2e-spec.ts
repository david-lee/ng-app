import { LifeAppPage } from './app.po';

describe('life-app App', function() {
  let page: LifeAppPage;

  beforeEach(() => {
    page = new LifeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
