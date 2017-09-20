import { StrucDirPage } from './app.po';

describe('struc-dir App', () => {
  let page: StrucDirPage;

  beforeEach(() => {
    page = new StrucDirPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
