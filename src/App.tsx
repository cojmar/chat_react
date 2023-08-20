import React, { useState } from 'react';
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import PrimeReact from 'primereact/api';
import { Ripple } from 'primereact/ripple';
import './App.scss';
import Chat from './components/Chat/Chat';

const App = () => {
    PrimeReact.ripple = true;



    return (
        <PrimeReactProvider>
            {/*<div className="card flex justify-content-center align-items-center">*/}
            {/*    <div className="bg-primary flex select-none justify-content-center align-items-center shadow-2 border-round p-6 font-bold p-ripple">*/}
            {/*        Click Me*/}
            {/*        <Ripple />*/}
            {/*    </div>*/}
            {/*</div>*/}

            <Chat />
        </PrimeReactProvider>
    );
}

export default App;
