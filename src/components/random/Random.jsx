import React from 'react';
import { upcome } from '../../dummyData'
import './random.css'

let randomIndex = Math.floor(Math.random() * upcome.length);
var randomElement = upcome[randomIndex]

console.log(randomElement); 

const Random = () => {
    return (
        <a onClick={() => alert(randomElement.name)}>Get Random</a>
    )
}

// const Random = ({active, setActive}) => {
//     return (
//         <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
//             <div className='modal__content' onClick={e => e.stopPropagation()}>
//                 <div className='MovieBox'>
//                     <div className='img'>
//                     <img src={randomIndex.cover} alt='' />
//                 </div>
//                 <div className='text'>
//                     <h3>{randomIndex.name}</h3>
//                     <span>{randomIndex.toPrecisiontime}</span> <br />
//                     <button className='primary-btn'>
//                         <i className='fa fa-play'></i> PLAY NOW
//                     </button>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Random;