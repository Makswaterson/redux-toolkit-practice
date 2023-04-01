import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { getAllTodos } from 'redux/todosSlise';

export const TodosList = () => {
  const stateTodos = useSelector(getAllTodos);

  return (
    <>
      {stateTodos.length === 0 && (
        <Text textAlign="center">There are no any todos ... </Text>
      )}

      <Grid>
        {stateTodos.length > 0 &&
          stateTodos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo id={todo.id} text={todo.text} counter={index + 1} />
            </GridItem>
          ))}
      </Grid>
    </>
  );
};
