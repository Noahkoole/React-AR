import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
// import {Scene} from '@belivvr/aframe-react';
// import '@ar-js-org/ar.js';

export default function App() {
  return (
    <BrowserRouter>
    <Routes />
    </BrowserRouter>
  )
}