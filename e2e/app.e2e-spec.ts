import { PdnCliFinalPage } from './app.po';

describe('pdn-cli-final App', () => {
  let page: PdnCliFinalPage;

  beforeEach(() => {
    page = new PdnCliFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
