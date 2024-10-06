 import './App.css'
// import List from './components/List';
import {useState} from 'react';

function App() {
  // jsx 실습
  /*
  const nickname = '매튜'
  const sweetPotato = '고구마'
  const array = ['REACT', 'NEXT', 'VUE', 'SVELTE', 'ANGULAR', 'REACT-NATIVE']
  return (
     <>
      <strong className='school'>상명대학교</strong>
      <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>{nickname}/김용민</p>
      <h1>{`${nickname}는 ${sweetPotato} 아이스크림을 좋아합니다.`}</h1>
      <ul>
        {array.map((yaho, idx) => (
          <List key = {idx} tech = {yaho} />
        ))}
      </ul>
     </>
  )
  */

  //useState 실습
  /*
  const [count, setCount] = useState(0)
  const handleIncreaseNumber = () => {
    setCount(count + 1);

    // setCount를 여러번 호출해도 한 번 호출한 것과 같은 결과
    // setCount(prev => prev + 1); 로 해결 가능!
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }
  return (
     <>
      <h1>{count}</h1>
      <button onClick={handleIncreaseNumber}>숫자 증가</button>
     </>
  )
  */

  // useState를 활용하여 객체를 업데이트 하기
  /*
  const [person, setPerson] = useState({
    // useState를 이용하여 person 객체를 초기화
    name: "임가희",
    age: 10,
    nickname: "제리"
  });

  // city 값 새로 추가하여 업데이트 하는 함수
  const updateCity = () => {
    setPerson(prevPerson => ({
      ...prevPerson,  // 얕은 복사
      city: "서울"
    }));
  };

  // age 값을 1씩 증가시키는 함수
  const increaseAge = () => {
    setPerson(prevPerson => ({
      ...prevPerson, // 이전 person 객체의 복사본 생성
      age: prevPerson.age + 1 // 다른 key value는 유지하고 age 값만 1 증가
    }))
  }

  return(
    <>
      <h1>이름: {person.name}</h1>
      <h2>나이: {person.age}</h2>
      <h3>닉네임: {person.nickname}</h3>
      {person.city && <h4>도시: {person.city}</h4>}
      <button onClick={updateCity}>도시 추가</button>
      <button onClick={increaseAge}>나이 증가</button>
    </>
  );
  */
}

export default App