import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from "next/router"


import Header from '../src/Components/Header';

export default function PageRestaurant() {
    const [ dataRestaurant, setDataRestaurant ] = React.useState([]);
    const [ dataImageLunches, setDataImageLunches ] = React.useState([]);
    const router = useRouter()
    const {
        query: { id }
    } = router
    console.log(router);
    console.log(id);

    React.useEffect(() => {
        fetch(`http://localhost:8000/restaurants/${id}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log('Respota Recebida');
            console.log(data);
            setDataRestaurant(data);
            setDataImageLunches(data.lunches[0].image)
          })
      }, []);

    return (
        <>
            <Header />
            <div>
            <img src={dataRestaurant.image} />
            <p>nome do restqaurant: {dataRestaurant.name}</p>
            <br/>
            <p>descrição do restaurante: {dataRestaurant.description}</p>
            <br/>
            <p>segunda á sexta: {dataRestaurant.monday}</p>
            <br/>
            <p>Sábado: {dataRestaurant.saturday}</p>
            <br/>
            <p>Domingo: {dataRestaurant.sunday}</p>
            </div>
            <hr></hr>

            <div>
                <h3>Almoços</h3>
                <img src={dataRestaurant.image}/>
                <p>{dataRestaurant.lunches[0].image}</p>
                <p>{dataRestaurant.lunches[0].name}</p>
                <p>{dataRestaurant.lunches[0].description}</p>
                <p>{dataRestaurant.lunches[0].price}</p> 
            </div>
            <div>
                <h3>Bebidas</h3>
                <p>{dataRestaurant.drinks[0].name}</p>
                <p>{dataRestaurant.drinks[0].description}</p>
                <p>{dataRestaurant.drinks[0].price}</p> 
            </div>
            <div>
                <h3>Sobremesas</h3>
                <p>{dataRestaurant.desserts[0].name}</p>
                <p>{dataRestaurant.desserts[0].description}</p>
                <p>{dataRestaurant.desserts[0].price}</p> 
            </div>
            
        </>
    )
}

