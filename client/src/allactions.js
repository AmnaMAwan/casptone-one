import { UserContext, usersi ,num1,bal,balcontext,Card} from "./context";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Allactions(){
  const ctx = React.useContext(UserContext); 
  var ctxbal=React.useContext( balcontext) 
  
 //const  deposit=100;
 //const [value, setValue] = useState('');
 // ctxbal.balance=ctxbal.balance+300;
 
  
  //bal=deposit;
 
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  var [Deposits, setDeposits]    = React.useState('');
   
  //const[ctxbal,setbalance]     = React.useState('');
  //const [value, setValue] = useState('');

  /*const handleChange = event => {
    setValue(event.target.value);
  };

  console.log(value);
  */
  
  
    

   

    
  
         

      
      return (

                 



        //
        <>
        <p align="center">
        <Card
        bgcolor="primary"
        
        header="All actions Screen"
        status={status}
        body={show ? (  
                <>{'current balance is '}
                <font  color="red">{ctxbal.balance}{ctx.name}</font>
                 
                {ctx.email}
                
                
                
                </>
              ):(
                <>
                <h5>Success</h5>
                
                </>
              )}
      />

               <hr/
               > 
        
        
        
        </p>
        </>
               
               
              
            );  
      }        


    
