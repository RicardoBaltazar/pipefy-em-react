import React from 'react'
import "./cards.css"

import { loadLists } from '../../services/api'
//const cards = loadLists()

export default function Cards({ data }) {
    return (
        <>
            <div className="cards">
                <header>
                    {data.labels.map(label => <label color="#7159c1"></label>)}
                </header>
    <p>{data.content}</p>
                <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="" />
            </div>
        </>
    )
}