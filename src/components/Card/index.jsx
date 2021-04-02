import React from 'react'
import './Card.css'

export const Card = ({ data }) => {

    return <> <div className="row">
    {
       
        data.img && <div style={{ backgroundImage: `url(${data.img})` }} className="card">
        </div>
    }
    {
        <div className="title">{data.title}</div>
    }
    {
        <div className="text">{data.text}</div>
    }
    {
        <div className="prise">{data.prise}</div>
    }
    {
        <div className="sum">{data.sum}</div>
    }
    {
        <div className="col">{data.col}</div>
    }
    {
        <div className="input">{data.input}</div>
    }
        {
        <div className="button">{data.button}</div>
    }
</div>
</>
}
 