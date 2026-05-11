import React from 'react';

const DestinationPage = async() => {
    const res = await fetch('http://localhost:5000/destination')
    const data = await res.json();

    console.log(data, "destination data");
    
    return (
        <div>
            <h2>total: {data.length}</h2>
        </div>
    );
};

export default DestinationPage;