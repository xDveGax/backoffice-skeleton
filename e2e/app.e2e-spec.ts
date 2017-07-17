import { BackofficeSkeletonPage } from './app.po';

describe('backoffice-skeleton App', () => {
  let page: BackofficeSkeletonPage;

  beforeEach(() => {
    page = new BackofficeSkeletonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
