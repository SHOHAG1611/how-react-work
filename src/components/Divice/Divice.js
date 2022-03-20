import React from 'react';

const Device = (props) => {
    return (
        <div>
            <h1>Divice: {props.name}</h1>
            <h1>Price: {props.price}</h1>
        </div>
    );
};

export default Device;