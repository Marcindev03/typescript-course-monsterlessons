// const updatedArray = append<string>('baz', ['foo', 'bar']);
// const searchStr = 'foo';
// const hasSearchedString = any<string>(
//   (el: string) => el.contains(searchStr),
//   ['foooo', 'bar', 'baz']
// );

const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);

  return {
    ...obj,
    id,
  };
};

interface UserInterface<T, V> {
  name: string;
  data: T;
  meta: V;
}

const user: UserInterface<{ meta: string }, string> = {
  name: 'Jack',
  data: {
    meta: 'foo',
  },
  meta: 'Some metadata',
};

const user2: UserInterface<string[], string> = {
  name: 'John',
  data: ['foo', 'bar', 'baz'],
  meta: 'Some metadata',
};
