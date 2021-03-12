import Head from 'next/head';
import styled from 'styled-components';

import Header from '../src/Components/Header';
import InputSearch from '../src/Components/Input-Search';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;

  p {
    color: #404040;
    font-size: 1.5rem;
    margin: 1.5rem 0;
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
        <InputSearch />
      </Main>
    </div>
  )
}
