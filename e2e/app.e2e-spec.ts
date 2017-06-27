import { LighteningEditorPage } from './app.po';

describe('lightening-editor App', () => {
  let page: LighteningEditorPage;

  beforeEach(() => {
    page = new LighteningEditorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
