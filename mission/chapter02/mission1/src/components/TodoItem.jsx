// 하나의 할 일을 관리(수정, 삭제)
import React from 'react';
import { useState } from 'react';
import './TodoItem.css';
import Button from './Button';
import Input from './Input';

function TodoItem({ todo, deleteTodo, updateTodo }) {
  // 수정 중 상태인지 아닌지 확인하는 useState
  const [editing, setEditing] = useState(false);
  // 텍스트를 수정할 때 사용하는 useState
  const [editText, setEditText] = useState(todo.task);

  // 수정 완료 버튼을 눌렀을 때 실행되는 함수
  const finishEdit = () => {
    updateTodo(todo.id, editText); // 수정한 할 일을 업데이트
    setEditing(false); // 수정 중 상태를 false로 변경
  };

  return (
    <div className="todo-item">
      {editing ? ( /* editing : true 일 때 실행 */
        <>
          <Input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <Button onClick={finishEdit}>수정 완료</Button>
        </>
      ) : ( /* editing : false 일 때 실행 */
        <>
          <p className="todo-task">
            {todo.id}. {todo.task}
          </p>
          <Button onClick={() => setEditing(true)}>수정 진행</Button>
        </>
      )}
      <Button onClick={() => deleteTodo(todo.id)}>삭제하기</Button>
    </div>
  );
}

export default TodoItem;