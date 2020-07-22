import React from 'react'
import "./boards.css"

import Lists from '../Lists/Lists'

import { loadLists } from '../../services/api'
//variavel para as listas
const lists = loadLists()


export default function Boards() {
    return (
        <div className="board">
            {lists.map(list => <Lists key={list.title} data={list}/>)}  
         
        </div>
    )
}