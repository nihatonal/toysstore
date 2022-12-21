import React, { useState } from 'react';

import ToyCard from './ToyCard';

import './ToysSlider.css'
function ToysSlider(props) {
    const [positionSlide, setPositionSlide] = useState(0)
    let offsetX;
    const move = e => {
        if (e.pageX - offsetX > 1065 || e.pageX - offsetX < 0) return
        const el = e.target
        el.style.left = `${e.pageX - offsetX}px`
        setPositionSlide((e.pageX - offsetX) * 100 / 1065 * (props.data.length / 4 - 1))
        // el.style.top = `${e.pageY - offsetY}px`
    }
    const add = e => {
        const el = e.target
        offsetX = e.clientX - e.target.offsetLeft
        // offsetY = e.clientY - el.getBoundingClientRect().top
        el.addEventListener('mousemove', move)
    }
    const remove = e => {
        const el = e.target
        el.removeEventListener('mousemove', move)
    }
    return (
        <div className="shopping_content">
            <div className="carouselbar_wrapper">
                <div className="carouselbar">
                    <div className='carouselbar_btn' onMouseDown={add} onMouseUp={remove}></div>
                </div>
            </div>
            <div className="shopping_items" style={{ left: `-${positionSlide}%` }}>

                {props.data.map((item) => (
                    <ToyCard
                        id={item.id}
                        name={item.name}
                        image={item.image.default}
                        key={item.id}
                        price={item.price}
                        onClick={props.onClick}
                    />
                ))
                }

            </div>

        </div>
    );
}

export default ToysSlider;