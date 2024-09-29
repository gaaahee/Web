// 해야할 일과 해낸 일을 추가할 배열 선언
let todoList = [];
let doneList = [];

// 엔터 키를 누르면 할 일을 추가하는 함수
function addTask(event) {
    // taskInput : 입력 창 요소
    // task : 입력 창에 입력된 값
    const taskInput = document.getElementById('todo-input');
    const task = taskInput.value;

    if(event.keyCode == 13 && task !== '') { // 엔터 키가 눌렸는지 확인하고 입력된 내용이 있을 때
        todoList.push(task);  // 할 일 추가
        taskInput.value = ''; // 입력 창 초기화
        renderLists();  // 리스트 업데이트
    }
}

// 할 일을 화면에 출력하는 함수
function renderLists() {
    const todoListElement = document.getElementById('todo-list');
    const doneListElement = document.getElementById('done-list');

    todoListElement.innerHTML = '';
    doneListElement.innerHTML = '';

    // 할 일 리스트
    todoList.forEach((task, index) => { // todoList 배열을 반복문으로 순회
        // task : 배열에 들어있는 할 일
        // index : 할 일의 인덱스  
        const li = document.createElement('li'); // 새로운 <li> 태그를 생성
        // 추가된 task 바로 옆에 완료 버튼을 만들고 html에 추가
        // ${index} 는 인덱스를 동적으로 반영함(텍스트 아니고 변수!)
        li.innerHTML = `${task} <button class = "complete-btn" onclick="moveToDone(${index})">완료</button>`;
        todoListElement.appendChild(li);
    });

    // 해낸 일 리스트
    doneList.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${task} <button class = "remove-btn" onclick="removeList(${index})">삭제</button>`; // <li> 태그에 task의 내용을 html로 삽입
        doneListElement.appendChild(li); // doneListElement의 자식 요소로 추가
    });
}

// 해야 할 일을 해낸 일로 이동시키는 함수
function moveToDone(index) {
    const task = todoList.splice(index, 1)[0];  // 할 일을 "To Do" 리스트에서 제거하고 가져옴
    doneList.push(task);  // "Done" 리스트에 추가
    renderLists();  // 리스트 업데이트
}

// 해낸 일에 존재하는 리스트를 삭제하는 함수
function removeList(index){
    doneList.splice(index, 1);  // 할 일을 "Done" 리스트에서 제거하고 가져옴
    renderLists();  // 리스트 업데이트
}