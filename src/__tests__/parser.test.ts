import {parseURLParams} from "../index";

test('URL Parser', () => {
  expect(parseURLParams('test')).toBe('Hello test');
});
