import jsdomify from 'jsdomify';
import Ga       from '../Ga';

describe('Ga', () => {
  let document;
  let ga;
  const code = 'foo';
  const path = 'bar';

  before(() => {
    const html = '<!doctype html><html><head><script></script></head><body><div id="content"></div></body></html>';
    jsdomify.create(html);
    document        = jsdomify.getDocument();
    ga              = Ga(code);
    global.document = document;
    global.windos   = document.defaultView;
    ga('send', 'pageview', path);
    console.dir(ga);
  });

  after(() => {
    jsdomify.destroy();
  });

  it('should have valid parameter.', () => {
    console.assert(ga.q[0][0] === 'create');
  });

  it('should have valid parameter.', () => {
    console.assert(ga.q[0][1] === code);
  });

  it('should have valid parameter.', () => {
    console.assert(ga.q[0][2] === 'auto');
  });

  it('should have valid parameter.', () => {
    console.assert(ga.q[1][0] === code);
  });

  it('should have valid parameter.', () => {
    console.assert(ga.q[2][0] === 'send');
  });

  it('should have valid parameter.', () => {
    console.assert(ga.q[2][1] === 'pageview');
  });

  it('should have valid parameter.', () => {
    console.assert(ga.q[2][2] === path);
  });
});
