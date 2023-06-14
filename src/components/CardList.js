import React from "react";
import Card from './Card'; 

function CardList ({robots}) {
    
    // if (true){
    //     throw new Error("Nooooooooo");
    // }
    return (
        <div>
            {
                robots.map((robot, i) => {
                    return (
                        <Card 
                            key={robot.id} 
                            id={robot.id} 
                            name={robot.name} 
                            email={robot.email}
                        />
                    );
                })                
            }
        </div>
        // <div>
            
        //     {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/> */}
        // </div>,
        // console.log("", robots)       
    );
}

export default CardList; 