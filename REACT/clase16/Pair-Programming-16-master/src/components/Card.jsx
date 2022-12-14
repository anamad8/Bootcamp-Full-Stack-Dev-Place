import React from 'react'
import './Card.css'

function Card({title,imgUrl,body}) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imgUrl} alt="" />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
            </div>

            <div className="btn">
                <button>
                    <a href="">
                        View more
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Card;