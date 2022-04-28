/* import Container from './components/Container'; */
import InfoField from './components/InfoField';
import QR from './components/QR';
import styled from 'styled-components';

function App() {
  return (
    <>
      <Outer>
        <Container>
          <QR />
          <InfoField />
        </Container>
      </Outer>
    </>
  );
}

const Outer = styled.div`
  background-color: rgb(131, 186, 234);
  padding: 3em 1em 3em 1em;
`;
const Container = styled.div`
  background-color: hsl(0, 0%, 100%);
  position: relative;
  border-radius: 8px;
  width: 100%;
  max-width: 288px;
  padding: 1em 10px 2em 10px;
  margin: 0 auto;
`;

export default App;
