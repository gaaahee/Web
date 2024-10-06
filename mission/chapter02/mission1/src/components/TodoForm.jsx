// 할 일을 추가하는 입력 폼
import React from 'react';
import './TodoForm.css';
import Input from './Input';
import Button from './Button';

// 사용자가 폼을 제출하면 실행되는 함수
function TodoForm({ text, setText, addTodo }) {
  // 다른 컴포넌트에서 text, setText, addTodo의 상태 값을 받아와 아래 코드 실행
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(); // 할 일 추가
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />

      {/* onChange={(e) => setText(e.target.value)}
      사용자가 입력창에 값을 입력할 때마다 text 상태가 업데이트 됨
      e.target.value : 사용자가 현재 입력한 값
      onChange 속성 : 입력한 내용이 바뀔 때 실행되는 이벤트 핸들러 */}

      <Button type="submit">할 일 등록</Button>
    </form>
  );
}

export default TodoForm;