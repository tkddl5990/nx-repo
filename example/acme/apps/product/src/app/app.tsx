import styled from 'styled-components';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <h1>여기는 프로덕트 페이지!!!</h1>
      <NxWelcome title="product" />
    </StyledApp>
  );
}

export default App;
