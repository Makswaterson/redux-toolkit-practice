import { TodosList } from './TodosList/TodosList';

import { Container, Header, SearchForm, Section } from 'components';

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <TodosList />
        </Container>
      </Section>
    </>
  );
};
