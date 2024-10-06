// 할 일 목록 관리
import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos }) {
  // 할 일 삭제하기
  const deleteTodo = (id) => { // 여기서 id는 삭제할 할 일의 고유 id
    setTodos((prev) => prev.filter((item) => item.id !== id));
    //  prev.filter() : id와 일치하지 않는 할 일만 보여주기
    // item: prev 배열의 각 요소를 가리키는 매개변수(= 하나의 할 일)
  };

  // 할 일 수정하기
  const updateTodo = (id, text) => { // 여기서 id는 수정할 할 일의 고유 id
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    // item 변수는 map 메서드에서 사용하고, 배열의 각 요소를 가리키는 매개변수
  };

  return (
    <div className="todo-list">
      {todos.map((todo) => ( // 할 일 목록을 전부 순회하며 TodoItem 컴포넌트로 상태 값을 전달
        <TodoItem
          key={todo.id} // 각 할 일에 고유한 id를 key 속성 값으로 전달
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;