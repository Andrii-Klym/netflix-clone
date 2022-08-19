import React from 'react';
import { upcome } from '../../dummyData'
import './random.css'

let randomIndex = Math.floor(Math.random() * upcome.length);
var randomElement = upcome[randomIndex]

const Random = ({active, setActive}) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                <div className='MovieBox'>
                    <div className='img'>
                        <img src={randomElement.cover} alt='' />
                    </div>
                    <div className='text'>
                        <h3>{randomElement.name}</h3>
                        <span>{randomElement.toPrecisiontime}</span> <br />
                        <button className='primary-btn'>
                            <i className='fa fa-play'></i> PLAY NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Random;