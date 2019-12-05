import test from 'ava';
import { sayHello } from '..';

interface T {
  is: any;
}

test('my passing test', (t: T): void => {
  t.is(sayHello(), 'hi');
});
