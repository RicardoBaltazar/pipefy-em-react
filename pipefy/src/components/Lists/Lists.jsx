import React from 'react'
import "./lists.css"

//importanto um icone de cada vez. o md é material design, onde os icones tem o mesmo tamanho
import { MdAdd } from 'react-icons/md'
import Cards from '../Cards/Cards'

export default function Lists() {
    return (
        <>
            <div className="container">
                <header>
                    <h2>Tarefas</h2>
                    <button>
                        <MdAdd size={24} color='#fff' />
                    </button>
                </header>

                <ul>

                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    
                </ul>
            </div>
        </>
    )
}

//importe as fontes dos icons com npm install react-icons --save