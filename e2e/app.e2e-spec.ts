import { ScoreGamesPage } from './app.po';

describe('score-games App', function() {
  let page: ScoreGamesPage;

  beforeEach(() => {
    page = new ScoreGamesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
