import React, { ChangeEvent, useState } from 'react';
import {
  useRecoilState,
} from 'recoil';
import { todoListAtom } from './atoms';

function TodoRow({ todo, idx }: any) {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  const editText = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    const newTodo = {
      ...todoList,
      text: value,
    };

    setTodoList([...todoList.slice(0, idx), newTodo, ...todoList.slice(idx + 1)]);
  };

  const toggleCompletion = () => {
    const newTodo = {
      ...todoList,
      complettion: !todo.complettion,
    };

    setTodoList([...todoList.slice(0, idx), newTodo, ...todoList.slice(idx + 1)]);
  };

  const deleteTodo = () => {
    setTodoList([...todoList.slice(0, idx), ...todoList.slice(idx + 1)]);
  };

  return (
    <div>
      <input type="text" value={todo.text} onChange={editText} />
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={toggleCompletion}
      />
      <button onClick={deleteTodo} type="button">X</button>
    </div>
  );
}

function App() {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const [text, setText] = useState('');

  const onChangeText = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setText(value);
  };

  const addTodo = () => {
    const newTodo = {
      text: '',
      complettion: false,
    };

    setTodoList([...todoList, newTodo]);
  };

  return (
    <>
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={addTodo} type="button">Add</button>
      {todoList.map((todo, idx) => <TodoRow todo={todo} idx={idx} key={todo.text} />)}
    </>

  );
}

export default App;
