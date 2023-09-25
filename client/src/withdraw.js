import { UserContext, usersi ,num1,bal,balcontext,Card} from "./context";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Withdraw(){
  const ctx = React.useContext(UserContext); 
  var ctxbal=React.useContext( balcontext) 
 //const  deposit=100;
 //const [value, setValue] = useState('');
 // ctxbal.balance=ctxbal.balance+300;
 
  
  //bal=deposit;
 
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  var [Withdraws, setWithdraws]    = React.useState('');
   
  //const[ctxbal,setbalance]     = React.useState('');
  //const [value, setValue] = useState('');

  /*const handleChange = event => {
    setValue(event.target.value);
  };

  console.log(value);
  */
  
  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
    }

   const handlewithdrawsChange = (event) => {
      setWithdraws(Number(event.target.value));
    };


    /*const handleAddition = () => {
      setbalance(ctxbal +100);
    };

    */

  
      function handleWithdraws(){
        console.log(Withdraws);
        if (!validate(Withdraws,     'Withdraws'))     return;
        
        //ctx.users.push({value,balance:ctxbal});
        //ctxbal.balance.push({Deposits,balance:ctxbal});
        {ctxbal.balance=ctxbal.balance-Withdraws}
        //push({value,balance:100});
        setShow(false);
      }    

      function clearForm(){
        setWithdraws('');
        //setEmail('');
        //setPassword('');
        setShow(true);
      }
      return (

                 



        //
        <>
        <p  align="center">
        <Card
        bgcolor="primary"
        
        header="Withdraw Screen"
        status={status}
        body={show ? (  
                <>
                {'Current Balance is'}
                <font color="red">{ctxbal.balance}</font>
                <input type="number" className="form-control" id="withdraws"  placeholder="Enter withdraw" value={Withdraws} onChange={handlewithdrawsChange}/><br/>
                
                
                <button type="submit" className="btn btn-light" onClick={handleWithdraws}>Submit</button>
                </>
              ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Submit</button>
                </>
              )}
      />

               <hr/
               > 
        
        
        
        </p>
        </>
               
               
              
            );  
      }        


    
