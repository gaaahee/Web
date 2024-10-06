import './App.css';
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  // useState를 사용하여 할 일 목록과 입력 텍스트를 관리
  // 1. 할 일 목록을 관리
  const [todos, setTodos] = useState([
    // todos : 할 일 목록, setTodos : 할 일 목록을 업데이트 하는 함수
    // { id: 1, task: '투두 만들어보기' },
    // { id: 2, task: '희연 혜원 혜윤 건 찬민' },
  ]);
  // 2. 사용자가 입력하는 새로운 할 일을 텍스트로 저장하고 관리
  const [text, setText] = useState('');

  // 새로운 할 일을 추가하는 함수
  const addTodo = () => {
    if (text.trim().length === 0) return; // 입력창이 빈칸일 때는 함수 종료
    setTodos((prev) => [
      ...prev, // 얕은 복사로 기존 할 일은 그대로 복사
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText(''); // 입력창 빈 텍스트로 초기화

    // Math.floor(Math.random() * 100) -> 0 ~ 99 사이의 랜덤한 정수
  };

  return (
    <div className="App">
      {/* TodoForm 컴포넌트로 text, setText, addTodo 상태 값 전달 */}
      <TodoForm text={text} setText={setText} addTodo={addTodo} />
      {/* TodoList 컴포넌트로 todos, setTodos 상태 값 전달 */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;