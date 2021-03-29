import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from "next/router"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

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
        justify-content: left;
        align-items:center;
        margin-top: 1rem;
        margin-bottom: 1rem;
        width: 56%;
        @media screen and (max-width: 800px) {      
            width: 95vw;
            justify-content: center;
        }
    }
    .restaurant-header h3 {
        letter-spacing:0;
        color: #404040;
        margin-left: 0.5rem;
    }
    .restaurant-info{
        .restaurant-description{
            font-size: 1rem;
            @media screen and (max-width: 800px) {      
                font-size: 0.9rem;
            }
        }
        p{
            font-size: 0.8rem;
            letter-spacing:0;
            color: #404040;
            margin-left: 0.5rem;
        }
        p span {
            font-weight:bold;
        }
    }
    .options{
        width:56%;
        @media screen and (max-width: 800px) {      
            width: 95vw;
        }

        button{
            width: 100%;
            text-align:left;
            color: #404040;
            font-size: 1.1rem;
            font-weight: bold;
            border: none;
            outline: none;
            border-bottom:1px solid #404040;
            background-color:#fff;
            margin-bottom: 1rem;
            padding: 0.7rem 0 0.2rem 0;
            display: flex;
            justify-content: space-between;
            &:hover{
                cursor: pointer;
            }
            @media screen and (max-width: 800px) {      
                width: 100%;
            }

        }
    }
    .div-items{
        display: grid;
        grid-template-columns: 1fr 1fr;
        @media screen and (max-width: 800px) {      
            display: flex;
            flex-direction: column;
        }
    }
`;

export default function PageRestaurant() {
    const router = useRouter()
    const [dataRestaurant, setDataRestaurant] = React.useState([]);
    const [dataImageLunches, setDataImageLunches] = React.useState();
    const [showOptionsLunches, setShowOptionsLunches] = React.useState(false);
    const [showOptionsDrinks, setShowOptionsDrinks] = React.useState(false);
    const [showOptionsDesserts, setShowOptionsDesserts] = React.useState(false);
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
                    <button onClick={() => setShowOptionsLunches(showOptionsLunches => !showOptionsLunches)}>
                        Almoços <ArrowDropDownIcon />
                    </button>
                    <div className='div-items'>
                        {showOptionsLunches ? <Lunches /> : null}
                        {showOptionsLunches ? <Lunches /> : null}
                        {showOptionsLunches ? <Lunches /> : null}
                        {showOptionsLunches ? <Lunches /> : null}
                    </div>
                </div>
                <div className='options'>
                    <button onClick={() => setShowOptionsDrinks(showOptionsDrinks => !showOptionsDrinks)}>
                        Bebidas <ArrowDropDownIcon />
                    </button>
                    <div className='div-items'>
                        {showOptionsDrinks ? <Drinks /> : null}
                        {showOptionsDrinks ? <Drinks /> : null}
                        {showOptionsDrinks ? <Drinks /> : null}
                        {showOptionsDrinks ? <Drinks /> : null}
                    </div>
                </div>
                <div className='options'>
                    <button onClick={() => setShowOptionsDesserts(showOptionsDesserts => !showOptionsDesserts)}>
                        Sobremesas <ArrowDropDownIcon />
                    </button>
                    <div className='div-items'>
                        {showOptionsDesserts ? <Desserts /> : null}
                        {showOptionsDesserts ? <Desserts /> : null}
                        {showOptionsDesserts ? <Desserts /> : null}
                        {showOptionsDesserts ? <Desserts /> : null}
                    </div>
                </div>
            </Main>
        </>
    )
};