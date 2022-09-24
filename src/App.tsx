import React, { ChangeEvent } from 'react';
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { textState } from './atoms';
import { charCountState } from './selectors';

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setText(value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo:
      {' '}
      {text}
    </div>
  );
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return (
    <>
      Character Count:
      {count}
    </>
  );
}

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
