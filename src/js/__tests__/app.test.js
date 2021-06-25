import superAttack from '../app';

const character1 = {
  name: 'Лучник',
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

test('1/2 superAttack', () => {
  expect(superAttack(character1)).toEqual([
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ]);
});

const character2 = {
  name: 'Лучник',
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

test('no descriptions', () => {
  expect(superAttack(character2)).toEqual([{
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Описание недоступно',
  },
  {
    id: 9,
    name: 'Нокаутирующий удар',
    icon: 'http://...',
    description: 'Описание недоступно',
  },
  ]);
});

const character3 = {
  name: 'Лучник',
};

test('no special', () => {
  expect(superAttack(character3)).toBeNull();
});
