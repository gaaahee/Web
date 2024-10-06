import './App.css'
import {useState} from 'react';

function App() {
  // 실습 - ToDoList 만들며 useState 익히기

  const [todos, setTodos] = useState([
    {id: 1, task: '투두 만들어보기'},
    {id: 2, task: '희연 혜원 혜윤 건 찬민'},
    //{id: 3, task: text},
  ]);
  console.log(todos); // 초기값 출력

  const [text, setText] = useState('');

  const [editingId, setEditingId] = useState(false);
  const [editText, setEditText] = useState('');

  // 렌더링 방지 함수
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 1. 추가하기
  const addTodo = () => {
    if(text.trim().length === 0) return; // 입력창이 빈칸일 때는 todo 추가 안 됨
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText(''); // 입력창 초기화
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }; // 삭제하기 버튼을 누른 todo만 제외한 나머지를 보여주기
  // id: 삭제하기 버튼을 누른 todo의 id, item: todos 배열의 요소, filter: todos 배열을 순회
  
  // 3. **수정하기**
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId('');
  };

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type = 'text' 
        value = {text} 
        onChange={(e) =>setText(e.target.value)}
        />
        <button onClick={() => addTodo()} type = 'submit'>할 일 등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} style={{display: 'flex', gap: '20px'}}>
            {/* 수정이 아닐 때 */}
            {editingId !== todo.id && (
              <div key ={todo.id} style = {{display: 'flex', gap: '5px'}}>
              <p>{todo.id}.</p>
              <p>{todo.task}</p>
            </div>
            )}
            {/* 수정중 상태일 때 */}
            {editingId === todo.id && (
              <div key ={todo.id} style = {{display: 'flex', gap: '5px'}}>
              <p>{todo.id}.</p>
              <input 
                defaultValue={todo.task} 
                onChange={(e) => setEditText(e.target.value)}
              />
            </div>
            )}
            <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>

            {editingId === todo.id ?(
              <button onClick={() => updateTodo(editingId, editText)}>수정 완료</button>
            ) : (
              <button onClick={() => setEditingId(todo.id)}>수정 진행</button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App