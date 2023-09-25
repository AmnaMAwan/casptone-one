
import { UserContext ,Card} from "./context";

import banks from "./bank.png";
import React from 'react';
export function Home(){
    const ctx = React.useContext(UserContext);  
    return (
     <p  align="center">
    <Card bgcolor="primary"
        txtcolor="Red"
        header="Banking App Landing Module"
        title="Welcome to the Amna's Bank"
        text="You can move around using the navigation bar."
        body= <img src={banks} height={100} width={100}></img>
        
        
        /> 
       
      </p>
      
      
    );  
  }
  