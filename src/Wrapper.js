import React from 'react';

function Wrapper({ children }) {
  const style = {
    border: '2px solid aqua',
    padding: '16px',
  };
  return <div style={style}>{children}</div>;
}

//비구조화 할당 * > 확인하기
//쓰이는 곳(App.js)에서 값을 정한다 = props(부모) , 컴포넌트 내부에서 작성, 받은 쪽은 props라는 예약어를 통해 받음
//쓰임 당하는 곳(Hello.js나 Wrapper.js)에서 값을 정한다 = children, 컴포넌트 태그 사이 넣은 값 조회는, children이라는 예약어 사용해야 보임!!

export default Wrapper;
