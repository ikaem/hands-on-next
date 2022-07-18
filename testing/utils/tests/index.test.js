// testing\utils\tests\index.test.js
import {
  cutTextToLength,
  slugify,
  composeArticleSlug,
  extractArticleIdFromSlug,
} from '../index';

describe('cutTextToLength', () => {
  test('should cut a string that exceeds 10 chars', () => {
    const initialString = 'This is a 34 character long string';
    const cutResult = cutTextToLength(initialString, 10);
    expect(cutResult).toEqual('This is a ...');
  });
});

describe('slugify makes a string URL-safe', () => {
  test('Should convert a string to URL-safe format', () => {
    const initialString = 'This is a string to slugify';
    const slugifiedString = slugify(initialString);
    expect(slugifiedString).toEqual('this-is-a-string-to-slugify');
  });
  test('Should slugify a string with special characters', () => {
    const initialString = 'This is a string to slugify!@#$%^&*()+';
    const slugifiedString = slugify(initialString);
    expect(slugifiedString).toEqual('this-is-a-string-to-slugify');
  });
});
