import React from 'react';


function Scroll ({children}) {
    return (
        <div style={{overflow: 'scroll', border: '5px solid black', height: '800px'}}>
            {children}
        </div>
    );
}

export default Scroll;