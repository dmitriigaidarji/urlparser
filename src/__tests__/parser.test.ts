import {parseURLParams} from "../index";

test('My Greeter', () => {
  expect(parseURLParams('Carl')).toBe('Hello Carl');
});
