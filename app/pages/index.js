import Head from 'next/head';
import styled from 'styled-components';

import Header from '../src/Components/Header';

const Main = styled.main`
  background-color: blue;
`;

export default function Home() {
  return (
    <div >
      <Header />
      <Main>
        ola mundo
      </Main>
    </div>
  )
}
