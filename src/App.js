import React, { useState, useRef } from 'react';
import './style.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

export default function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'test1',
      email: 'test1@sfs.com',
      active: true
    },
    {
      id: 2,
      username: 'test2',
      email: 'test2@sfs.com',
      active: false
    },
    {
      id: 3,
      username: 'test3',
      email: 'test3@sfs.com',
      active: false
    },
  ]);
  //setTimeout, setInterval 을 통해 만들어진 id, 외부 라이브러리 사용하여 생성된 인스턴스, scroll 위치
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user]);
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };
  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    //user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦, = user.id가 id 인 것을 제거
  };
  const onToggle = id => {
    setUsers(
      users.map(user=>
        user.id === id? {...user, active: !user.active} : user
      )
    );
  };
  return (
    <Wrapper>
      <Hello
        name="HJ"
        color="hotpink"
        comment="how are you doing?"
        isSpecial // true가 없어도 true로 간주함..., false만 넣어주면 됨
      />
      <Hello name="z" color="pink" />
      <Counter />
      <InputSample />
      {/* <UserList users={users} /> */}
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </Wrapper>
  );
}
