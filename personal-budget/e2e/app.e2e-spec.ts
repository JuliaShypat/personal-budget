import { PersonalBudgetPage } from './app.po';

describe('personal-budget App', () => {
  let page: PersonalBudgetPage;

  beforeEach(() => {
    page = new PersonalBudgetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
