import React from 'react';
import ListaPer from './assets/componentes/ListaPer';
import {Provider} from 'react-redux'
import generateStore from './assets/componentes/redux/store'
import Navegacion from './assets/componentes/Navegacion'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Hed from './assets/componentes/Hed'
import Videos from './assets/componentes/Videos';
import Creadores from './assets/componentes/Creadores';

function App() {

   const store = generateStore  ()


  return (
    <>
        <BrowserRouter> 
            <Navegacion brand="Rick and Morty"/>
              <Routes>
                <Route path='/personajes' element = {
                  <Provider store = {store}>
                  <ListaPer/> 
                  </Provider>
                    }/>
                  <Route path='/' element = { 
                  <Hed/> 
                  }/>
                <Route path='/videos' element = { 
                  <Videos/> 
                  }/>
                  <Route path='/creadores' element = { 
                  <Creadores/> 
                  }/>

                </Routes>
        </BrowserRouter>  
   </>
  );
}

export default App;
