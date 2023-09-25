import React from 'react';
import {ReactDOM, createRoot} from 'react-dom/client';
import './index.css';
import {createRoott} from 'react-dom';
import {HashRouter,Route,Routes} from 'react-router-dom';
import banks from './logoown.jpeg';

import { UserContext } from './context';
import { NavBars } from './navbars';
import {Signup} from './createusers';

import { Deposit } from './deposit';
import { Withdraw } from './withdraw';
import {Deposits} from './testdeposit';
import {Allactions} from './allactions';
import {Login} from './login';


//import {Signup} from './createusers';


//export const UserContext = React.createContext(undefined);

function Dashboard(){
  return (
    <HashRouter>
      <hr/>
      <img src={banks} height={100} width={100}></img>
      <h1>Main</h1>
      <NavBars/>
      <hr/>
   
     <UserContext.Provider value={{users:[{balance:100}]}}>
     <div className="container" style={{padding: "20px"}}>
    
         <Routes> 
          
         
          <Route path="/Deposit/" element={<Deposit/>} />
          <Route path="/Withdraw/" element={<Withdraw/>} />
         
         
          <Route path="/allactions" element={<Allactions/>} />
          
               </Routes>   

</div>

</UserContext.Provider>  
    </HashRouter>
      
          
          
          
  );
}




const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
  
<h1 align="center">Banking App</h1>
<Spa/>
  </React.StrictMode>,
);
