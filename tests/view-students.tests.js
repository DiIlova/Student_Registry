import { describe, it } from 'mocha';
import assert from 'assert';
import fetch from 'node-fetch';

describe('View Students page', function () {
  it('Page title', async function () {
    const res = await fetch('http://localhost:8888/students');
    const body = await res.text();
    assert.ok(body.includes('<h1>Registered Students</h1>'));
  });

  it('Students list', async function () {
    const res = await fetch('http://localhost:8888/students');
    const body = await res.text();
    assert.ok(
      body.includes('<ul><li>Steve (steve@gmail.com)</li><li>Tina (tina@yahoo.com)</li></ul>')
    );
  });
});
