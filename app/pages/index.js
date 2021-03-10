import Head from 'next/head';
import styled from 'styled-components';

import Header from '../src/Components/Header';

const Main = styled.main`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;

  p {
    color: #404040;
    font-size: 1.5rem;
    margin: 1rem 0;
    @media screen and (max-width: 600px) {      
      font-size: 1rem;
    }
  }

  
`;

export default function Home() {
  return (
    <div >
      <Header />
      <Main>
        <p>Bem-Vindo ao Lista Rango</p>
      </Main>
    </div>
  )
}
