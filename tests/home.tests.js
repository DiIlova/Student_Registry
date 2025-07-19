import assert from 'assert';
import fetch from 'node-fetch';
import { describe, it } from 'mocha';

describe('Home page', function () {
  it('Page title', async function () {
    const res = await fetch('http://localhost:8888/');
    const body = await res.text();
    assert.ok(body.includes('<h1>Students Registry</h1>'));
  });

  it('Students count', async function () {
    const res = await fetch('http://localhost:8888/');
    const body = await res.text();
    assert.ok(body.includes('Registered students: <b>2</b>'));
  });
});
