import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export const textState = atom({
  key: 'textState',
  default: '',
});
