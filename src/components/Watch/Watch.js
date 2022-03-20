import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import './Watch.css'
const Watch = () => {
    const [watch, setWatch] = useState(0);
    const IncresingWatch = () => {
        const newWatchCount = watch + 1;
        setWatch(newWatchCount);
    }
    useEffect(() => {
        console.log(watch)
    }, [watch])
    return (
        <div style={{ border: '2px solid black' }}>
            <h1>This is my Watch!!</h1>
            <h2>My Watch Number: {watch}</h2>
            <button onClick={IncresingWatch} className='BTNstyle'>Click For Update Watch Number.....</button>
            <Display watch={watch}></Display>
        </div>
    );
};

export default Watch;