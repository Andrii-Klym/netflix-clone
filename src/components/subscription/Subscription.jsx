import React from 'react';

import './subscription.css'
import '../random/random.css'

const Subscription = ({active, setActive, sub, typeSub}) => {

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal__box' onClick={e => e.stopPropagation()}>
                <div className='sub__box'>
                    <div className='box'>
                        <div className='discount'>-40%</div>
                        <p>"Maximum"</p>
                        <p>for one year</p>
                    </div>
                    <hr />
                    <div className='box'>
                        <p><del>100$</del></p>
                        <p>60$</p>
                        <p className="big-number">5$</p>
                        <p>dol/mon</p>
                        <button className="btn btn-primary" onClick={() => {
                            setActive(false)
                            sub("Subscribed")
                            typeSub("Maximum")
                        }}>Subscribe</button>
                    </div>
                </div>
                <div className='sub__box'>
                    <div className='box'>
                        <div className='discount'>-40%</div>
                        <p>"Maximum"</p>
                        <p>for two years</p>
                    </div>
                    <hr />
                    <div className='box'>
                        <p><del>200$</del></p>
                        <p>120$</p>
                        <p className="big-number">5$</p>
                        <p>dol/mon</p>
                        <button className="btn btn-primary" onClick={() => {
                            setActive(false)
                            sub("Subscribed")
                            typeSub("Maximum")
                        }}>Subscribe</button>
                    </div>
                </div>
                <div className='sub__box'>
                    <div className='box'>
                        <div className='discount'>-40%</div>
                        <p>"Optimal"</p>
                        <p>for one year</p>
                    </div>
                    <hr />
                    <div className='box'>
                        <p><del>50$</del></p>
                        <p>30$</p>
                        <p className="big-number">2.5$</p>
                        <p>dol/mon</p>
                        <button className="btn btn-primary" onClick={() => {
                            setActive(false)
                            sub("Subscribed")
                            typeSub("Optimal")
                        }}>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}    
        
export default Subscription;