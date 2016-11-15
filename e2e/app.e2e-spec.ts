import { NgCookbookMbaPage } from './app.po';

describe('ng-cookbook-mba App', function() {
  let page: NgCookbookMbaPage;

  beforeEach(() => {
    page = new NgCookbookMbaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
