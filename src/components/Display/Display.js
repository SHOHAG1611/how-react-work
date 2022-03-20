import React from 'react';
import AnotherCard from '../AnotherCard/AnotherCard';

const Display = (props) => {
    return (
        <div style={{ border: '2px solid blue', margin: '10px' }}>
            <h1>Hello Heare Is My Card</h1>
            <p>Products Add For Buy Numbers: {props.watch}</p>
            <AnotherCard watch={props.watch}></AnotherCard>
        </div>
    );
};

export default Display;