import getDouble from './getDouble.js';

describe('getDouble', () => {
  test('Renders heading', () => {
    expect(getDouble(10)).toEqual(20);
  });
});