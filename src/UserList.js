import React from 'react';

function User({ user, onRemove, onToggle }) {
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'pink' : 'grey',
        }}
        onClick={() => {
          onToggle(user.id);
        }}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}
// onRemove id가 ''인 객체를 삭제하라
function UserList({ users, onRemove, onToggle }) {
  // const users = [
  //   {
  //     id: 1,
  //     username: 'hyun',
  //     email: 'cc@sfs.com',
  //   },
  //   {
  //     id: 2,
  //     username: 'gaa',
  //     email: 'gama@sfs.com',
  //   },
  //   {
  //     id: 3,
  //     username: 'qwe',
  //     email: 'qwe@sfs.com',
  //   },
  // ];
  return (
    <div>
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}
      {/* {users.map((user) => {
        //생략된 거 잘보기, 파라미터 하나면 () 생략, 한줄짜리 return이라면 {} return 모두 생략 가능
        return <User user={user} onRemove={onRemove} />;
      })} */}
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
      {/* {users.map(
        (
          user,
          index //파라미터 2개일 때는 () 생략 못함, 별도의 id 없을 때는 index를 key로 사용
        ) => (
          <User user={user} key={index} onRemove={onRemove} />
        )
      )} */}
      {/* 위와 아래는 같음 */}
    </div>
  );
}

export default UserList;
