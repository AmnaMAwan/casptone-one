import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavBars(){
    
        return(
          <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#/CreateAccount/">Create Account</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/login/">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/deposit/">Deposit</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/withdraw/">Withdraw</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/balance/">Balance</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/alldata/">AllData</a>
                </li>  

                <li className="nav-item">
                  <a className="nav-link" href="#/testdeposit/">test increment</a>
                </li>          
              </ul>
            </div>
          </nav>
          </>
        );
      }