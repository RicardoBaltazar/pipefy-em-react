import React from 'react'
import "./boards.css"

import Lists from '../Lists/Lists'

export default function Boards() {
    return (
        <div className="board">
            <Lists />
            <Lists />
            <Lists />
            <Lists />
        </div>
    )
}