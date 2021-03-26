import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from "next/router"

import ImageFood from '../public/assets/prato-de-restaurante-vegetariano.png'

import Header from '../src/Components/Header';
import OptionsCardMenu from '../src/Components/Options-Card-Menu';

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
    .options{
    }
    .div-items{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

export default function PageRestaurant() {
    const router = useRouter()
    const [dataRestaurant, setDataRestaurant] = React.useState([]);
    const [dataImageLunches, setDataImageLunches] = React.useState();

    const [showOptionsLunches, setShowOptionsLunches] = React.useState(true);
    // const onClick = () => setShowOptionsLunches(true)

    const [showOptionsDrinks, setShowOptionsDrinks] = React.useState(true);
    // const onClick = () => setShowOptionsDrinks(true)

    const [showOptionsDesserts, setShowOptionsDesserts] = React.useState(true);
    // const onClick = () => setShowOptionsDesserts(true)

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

    // function toggle() {
    //     setShowOptionsLunches(showOptionsLunches => !showOptionsLunches);
    //   }

    const Lunches = () => (
        <OptionsCardMenu
            img={ImageFood}
            optionMenuName='Almoço 1'
            optionMenuDescripion='Descrição do Almoço 1'
            optionMenuValue='R$ 19,90'
        // optionMenuName={dataRestaurant.lunches[0].name}
        // optionMenuDescripion={dataRestaurant.lunches[0].description}
        // optionMenuValue={dataRestaurant.lunches[0].price}
        />
    )
    const Drinks = () => (
        <OptionsCardMenu
            img={ImageFood}
            optionMenuName='Bebida 1'
            optionMenuDescripion='Descrição da bebida 1'
            optionMenuValue='R$ 15,90'
        // optionMenuName={dataRestaurant.drinks[0].name}
        // optionMenuDescripion={dataRestaurant.drinks[0].description}
        // optionMenuValue={dataRestaurant.drinks[0].price}
        />
    )
    const Desserts = () => (
        <OptionsCardMenu
            img={ImageFood}
            optionMenuName='Sobremesa 1'
            optionMenuDescripion='Descrição da sobremesa 1'
            optionMenuValue="R$ 10,90"
        // optionMenuName={dataRestaurant.desserts[0].name}
        // optionMenuDescripion={dataRestaurant.desserts[0].description}
        // optionMenuValue={dataRestaurant.desserts[0].price}
        />
    )

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

                <div className='options'>
                    <h3>Almoços</h3>
                    {/* <button onClick={() => setShowOptionsLunches(false)}>Almoços</button> */}
                    <button onClick={() => setShowOptionsLunches(showOptionsLunches => !showOptionsLunches)}>Almoços</button>
                    <div className='div-items'>
                        {showOptionsLunches ? <Lunches /> : null}
                        {showOptionsLunches ? <Lunches /> : null}
                        {showOptionsLunches ? <Lunches /> : null}
                        {showOptionsLunches ? <Lunches /> : null}
                    </div>
                    {/* <img src={dataRestaurant.image}/> */}
                    {/* <p>{dataRestaurant.drinks[2].name}</p>
                    <p>{dataRestaurant.lunches[0].name}</p>
                    <p>{dataRestaurant.lunches[0].description}</p>
                    <p>{dataRestaurant.lunches[0].price}</p> */}
                </div>
                <div className='options'>
                    <h3>Bebidas</h3>
                    <button onClick={() => setShowOptionsDrinks(false)}>Bebidas</button>
                    <div className='div-items'>
                        {showOptionsDrinks ? <Drinks /> : null}
                        {showOptionsDrinks ? <Drinks /> : null}
                        {showOptionsDrinks ? <Drinks /> : null}
                        {showOptionsDrinks ? <Drinks /> : null}
                    </div>
                    {/* <p>{dataRestaurant.drinks[0].name}</p>
                    <p>{dataRestaurant.drinks[0].description}</p>
                    <p>{dataRestaurant.drinks[0].price}</p> */}
                </div>
                <div className='options'>
                    <h3>Sobremesas</h3>
                    <button onClick={() => setShowOptionsDesserts(false)}>Sobremesas</button>
                    <div className='div-items'>
                        {showOptionsDesserts ? <Desserts /> : null}
                        {showOptionsDesserts ? <Desserts /> : null}
                        {showOptionsDesserts ? <Desserts /> : null}
                        {showOptionsDesserts ? <Desserts /> : null}
                    </div>
                    {/* <p>{dataRestaurant.desserts[0].name}</p>
                    <p>{dataRestaurant.desserts[0].description}</p>
                    <p>{dataRestaurant.desserts[0].price}</p> */}
                </div>
            </Main>
        </>
    )
};