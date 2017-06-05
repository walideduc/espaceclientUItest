import { EspaceClientUiPage } from './app.po';

describe('espace-client-ui App', () => {
  let page: EspaceClientUiPage;

  beforeEach(() => {
    page = new EspaceClientUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
