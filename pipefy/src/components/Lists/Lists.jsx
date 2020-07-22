import React from 'react'
import "./lists.css"

//importanto um icone de cada vez. o md é material design, onde os icones tem o mesmo tamanho
import { MdAdd } from 'react-icons/md'
import Cards from '../Cards/Cards'

import { loadLists } from '../../services/api'
const cards = loadLists()

export default function Lists({ data }) {
    return (
        <>
            <div className="container">
                <header>
                    <h2>{data.title}</h2>
                    {data.creatable && (
                    <button>
                        <MdAdd size={24} color='#fff' />
                    </button>

                    )}


                </header>

                <ul>
                    {data.cards.map(card => <Cards key={card.id} data={card} />)}


                </ul>
            </div>
        </>
    )
}

//importe as fontes dos icons com npm install react-icons --save