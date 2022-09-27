import React, { useEffect, useState } from 'react';
import './style.css';
// import completeList from './CompleteList';

export default function App({ myProp }) {
  const initialList = [
    { id: 1, task: 'task One' },
    { id: 2, task: 'task two' },
    { id: 3, task: 'task three' },
  ];

  const [incompleteList, setIncompleteList] = useState(initialList);
  const [completeList, setCompleteList] = useState([]);

  const getData = () => {
    console.log('Fetching data form n/w');
    //fetch("//path");
  };

  // useEffect(() => {
  //   // getData();
  // }, []);

  const handleClick = (id) => {
    console.log('handleClick id:', id);

    setCompleteList([
      ...completeList,
      incompleteList.find((item) => item.id === id),
    ]);

    setIncompleteList([...incompleteList.filter((item) => item.id !== id)]);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <div>
        <p> In Complete List</p>
      </div>

      {incompleteList.map((item) => {
        return (
          <li
            style={{ cursor: 'pointer' }}
            onClick={(e) => handleClick(item.id)}
            key={item.id}
          >
            {' '}
            {item.task}{' '}
          </li>
        );
      })}
      <div>
        <p>Complete List</p>
        {completeList.map((e) => {
          return (
            <li style={{ cursor: 'pointer' }} key={e.id}>
              {' '}
              {e.task}{' '}
            </li>
          );
        })}
      </div>
    </div>
  );
}
