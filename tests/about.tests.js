import assert from 'assert';
import fetch from 'node-fetch';
import { describe, it } from 'mocha';

describe('About page', function () {
  it('Page title', async function () {
    const res = await fetch('http://localhost:8888/about');
    const body = await res.text();
    assert.ok(body.includes('<title>About</title>'));
    assert.ok(body.includes('<h1>About</h1>'));
  });
});
