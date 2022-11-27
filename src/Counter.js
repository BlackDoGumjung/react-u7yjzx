import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber((prevNumber) => {
      prevNumber + 1;
    });
    //setNumber 함수 안에 값을 업데이트하는 '다른 함수'를 파라미터로 넣어준 것! 파라미터 1개, 표현식 1개일 때는 (), {} 생략 가능!
    console.log('+1');
  };
  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
    console.log('-1');
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

//on이벤트이름={실행하려는함수}
//function useState(initialValue) {
//   let value = initialValue;
//   function state() {
//     return value;
//   }
//   function setState(newVal) {
//     value = newVal;
//   }
//   return [state, setState];
// }
//useState가 어떻게 내부값을 변경하는지 정리한 내용

export default Counter;
