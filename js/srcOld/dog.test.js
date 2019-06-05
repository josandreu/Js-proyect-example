import Dog from './dog';

test('Dog.bark', () => {
  const testDog = new Dog('Test');
  expect(testDog.bark()).toBe('Yeah!! I am Test');
});