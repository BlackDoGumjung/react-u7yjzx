import React, { useState, useRef } from 'react';

function InputSample() {
  // const [text, setText] = useState('');
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const nameInput = useRef();
  const { name, nickname } = inputs;

  const onChange = (e) => {
    //setText(e.target.value);
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value, // name 키를 가진 값을 value로 설정 , 객체의 키는 [name]: 'something'으로 접근 및 할당
    });
  };
  const onReset = () => {
    //setText('');
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };
  return (
    <div>
      {/* <input onChange={onChange} value={text} /> */}
      <input
        name="name"
        onChange={onChange}
        placeholder="이름"
        ref={nameInput}
        value={name}
      />
      <input
        name="nickname"
        onChange={onChange}
        placeholder="닉네임"
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:</b>
        {name} ({nickname})
      </div>
    </div>
  );
}

//리액트에서의 객체 업데이트 : 기존 객체 직접 수정 (x), 새 객체 만들어서 변화 주어야 함!

export default InputSample;
