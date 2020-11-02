import React, { FC } from 'react';
import GridGeneric from 'components/GridGeneric/GridGeneric';
import FuncComp from 'components/FuncComp/FuncComp';
import { useSelector } from 'react-redux';
import { todolistSelector } from './selectors';
import { useGetTodolistRequest } from './thunks/thunkTodolist';

const HomePage: FC = () => {
  const todolist = useSelector(todolistSelector);
  const getTodolistRequest = useGetTodolistRequest();

  const handleGetTodolist = async () => {
    await getTodolistRequest('todolist');
  };

  if (todolist.isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!!todolist.errorMessage) {
    return <h2>{todolist.errorMessage}</h2>;
  }

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={handleGetTodolist}>Get todolist</button>
      <h2>Grid generic type</h2>
      <div>{JSON.stringify(todolist.data)}</div>
      <GridGeneric
        data={[
          { id: 'id1', name: 'foo' },
          { id: 'id2', name: 'bar' },
        ]}
        renderItem={item => {
          return <div>{item.name}</div>;
        }}
      />
      <h2>Function commponent</h2>
      <FuncComp title="title" text="function component text" />
    </div>
  );
};

export default HomePage;
