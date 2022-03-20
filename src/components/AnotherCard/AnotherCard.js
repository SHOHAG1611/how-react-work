import React from 'react';

const AnotherCard = (props) => {
    return (
        <div style={{ border: '5px solid red', margin: '10px' }}>
            <h1>Heare is my Another Card Div !!</h1>
            <h2>My Last Cart Numbers Is:{props.watch}</h2>
        </div>
    );
};

export default AnotherCard;