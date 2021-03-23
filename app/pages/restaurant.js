import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from "next/router"

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
`;

export default function PageRestaurant() {
    const router = useRouter()
    const [dataRestaurant, setDataRestaurant] = React.useState([]);
    const [dataImageLunches, setDataImageLunches] = React.useState();

    const [ showOptions, setShowOptions ] = React.useState(false);
    const onClick = () => setShowOptions(true)

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


    const Lunches = () => (
        <OptionsCardMenu 
        optionMenuName={dataRestaurant.lunches[0].name}
        optionMenuDescripion={dataRestaurant.lunches[0].description}
        optionMenuValue={dataRestaurant.lunches[0].price}
        />
    )
    const Drinks = () => (
        <OptionsCardMenu 
        optionMenuName={dataRestaurant.drinks[0].name}
        optionMenuDescripion={dataRestaurant.drinks[0].description}
        optionMenuValue={dataRestaurant.drinks[0].price}
        />
    )
    const Desserts = () => (
        <OptionsCardMenu 
        optionMenuName={dataRestaurant.desserts[0].name}
        optionMenuDescripion={dataRestaurant.desserts[0].description}
        optionMenuValue={dataRestaurant.desserts[0].price}
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
                    <button onClick={onClick}>Almoços</button>
                    { showOptions ? <Lunches /> : null }
                    {/* <img src={dataRestaurant.image}/> */}
                    {/* <p>{dataRestaurant.drinks[2].name}</p>
                    <p>{dataRestaurant.lunches[0].name}</p>
                    <p>{dataRestaurant.lunches[0].description}</p>
                    <p>{dataRestaurant.lunches[0].price}</p> */}
                </div>
                <div className='options'>
                    <h3>Bebidas</h3>
                    <button onClick={onClick}>Bebidas</button>
                    { showOptions ? <Drinks /> : null }
                    {/* <p>{dataRestaurant.drinks[0].name}</p>
                    <p>{dataRestaurant.drinks[0].description}</p>
                    <p>{dataRestaurant.drinks[0].price}</p> */}
                </div>
                <div className='options'>
                    <h3>Sobremesas</h3>
                    <button onClick={onClick}>Sobremesas</button>
                    { showOptions ? <Desserts /> : null }
                    {/* <p>{dataRestaurant.desserts[0].name}</p>
                    <p>{dataRestaurant.desserts[0].description}</p>
                    <p>{dataRestaurant.desserts[0].price}</p> */}
                </div>
            </Main>
        </>
    )
};