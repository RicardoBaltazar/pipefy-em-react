import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from "next/router"

import Header from '../src/Components/Header';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    .restaurant-header {
        display: flex;
        justify-content: center;
        align-items:center;
        border:1px solid red;
        margin-top: 1rem;
    }
    .restaurant-header h3 {
        letter-spacing:0;
        color: #404040;
    }
    .restaurant-info{
        .restaurant-description{
            font-size: 1rem;
        }
        p{
            font-size: 0.8rem;
            letter-spacing:0;
            color: #404040;
        }
        p span {
            font-weight:bold;
        }
    }
`;

export default function PageRestaurant() {
    const router = useRouter()
    const [dataRestaurant, setDataRestaurant] = React.useState([]);
    const [dataImageLunches, setDataImageLunches] = React.useState();
    // const {
    //     query: { id }
    // } = router
    console.log(router);
    console.log(router.query.id);

    React.useEffect(() => {
        fetch(`http://localhost:8000/restaurants/${router.query.id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log('Respota Recebida');
                console.log(data);
                setDataRestaurant(data);
                // setDataImageLunches(data.lunches[0].image)
            })
    }, []);

    return (
        <>
            <Header />
            <Main>
                <div className='restaurant-header'>
                    <div>
                        <img src={dataRestaurant.image} />
                    </div>
                    <div className='restaurant-info'>
                        <h3>{dataRestaurant.name}</h3>
                        <p className='restaurant-description'>{dataRestaurant.description}</p>
                        <p>segunda á sexta: <span>{dataRestaurant.monday}</span></p>
                        <p>Sábado: <span>{dataRestaurant.saturday}</span></p>
                        <p>Domingo: <span>{dataRestaurant.sunday}</span></p>
                    </div>
                </div>
                <hr></hr>

                <div>
                    <h3>Almoços</h3>
                    {/* <img src={dataRestaurant.image}/> */}
                    {/* <p>{dataRestaurant.drinks[2].name}</p>
                    <p>{dataRestaurant.lunches[0].name}</p>
                    <p>{dataRestaurant.lunches[0].description}</p>
                    <p>{dataRestaurant.lunches[0].price}</p> */}
                </div>
                <div>
                    <h3>Bebidas</h3>
                    {/* <p>{dataRestaurant.drinks[0].name}</p>
                    <p>{dataRestaurant.drinks[0].description}</p>
                    <p>{dataRestaurant.drinks[0].price}</p> */}
                </div>
                <div>
                    {/* <h3>Sobremesas</h3>
                    <p>{dataRestaurant.desserts[0].name}</p>
                    <p>{dataRestaurant.desserts[0].description}</p>
                    <p>{dataRestaurant.desserts[0].price}</p> */}
                </div>
            </Main>
        </>
    )
};