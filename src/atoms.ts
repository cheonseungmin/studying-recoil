import {
  atom,
} from 'recoil';

export const todoListAtom = atom<any[]>({
  key: 'todoList',
  default: [],
});
