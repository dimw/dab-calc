const Nightmare = require('nightmare');
const expect = require('chai').expect;

describe('test duckduckgo search results', () => {
  it('should find the nightmare github link first', (done) => {
    const nightmare = Nightmare({ show: true });

    nightmare
      .goto('https://duckduckgo.com')
      .type('#search_form_input_homepage', 'github nightmare')
      .click('#search_button_homepage')
      .wait('#web_content_wrapper #links_wrapper')
      .evaluate(() =>
        document.querySelector('#web_content_wrapper .results a.result__a').href
      )
      .end()
      .then((link) => {
        console.log(link);
        expect(link).to.equal('https://github.com/segmentio/nightmare');
        done();
      });
  }).timeout(15000);
});
