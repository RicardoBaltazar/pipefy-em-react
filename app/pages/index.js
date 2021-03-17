import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Header from '../src/Components/Header';
import InputSearch from '../src/Components/Input-Search';
import RestaurantCard from '../src/Components/Restaurant-Card'

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

const Section = styled.section`
  /* border: 1px solid blue; */
  width: 90vw;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  flex-wrap: wrap;
  @media screen and (max-width: 600px) {      
      width: 95vw;
      justify-content: center;

  }
`

export default function Home() {
  const [dataRestaurants, setDataRestaurants] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8000/restaurants')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('Respota Recebida');
        console.log(data);
        setDataRestaurants(data);
      })
  }, []);

  const cardsRestautantName = dataRestaurants.map(data => {
    return (
      <>
        <RestaurantCard
          link='/restaurant'
          id={data.id}
          img={data.image}
          restaurantName={data.name}
          restaurantAddress={data.address}
          restaurantStatus={data.status}
        />
      </>
    )
  })

return (
  <div >
    <Header />
    <Main>
      <p>Bem-Vindo ao Lista Rango</p>
      <InputSearch />
      <Section>
        {cardsRestautantName}
      </Section>
    </Main>
  </div>
)
}
