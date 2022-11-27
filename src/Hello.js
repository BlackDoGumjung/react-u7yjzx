import React from 'react';

// function Hello(props) {
//   return <div style={{ color: props.color }}>Hi, {props.name}!</div>;
// }
//비구조화 할당 통해 props가 아닌 color, name을 props 자리에 넣어도 됨

function Hello({ color, name, comment, isSpecial }) {
  return (
    <div style={{ color: color }}>
      {isSpecial ? <b>*</b> : null}
      Hi, {name}! {comment}
    </div>
  );
}
//null, false, undefined 렌더링 : 아무것도 안 나옴

//컴포넌트에서 props 지정 없을 때 기본으로 사용할 값 설정 (component에 defaultProps)
Hello.defaultProps = {
  comment: 'nice to meet you!',
};

export default Hello;
