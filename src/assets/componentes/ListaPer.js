import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtermAccion, siguienteList,antesList} from './redux/r_mDucks'
import { Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[900],
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});


const ListaPer = () =>{
    const dispatch = useDispatch ()
    const personaje = useSelector (store => store.personajes.array)
    console.log(personaje);


  return (
    <div>
         <div className='row'>
             <div className='col-12 col-md-12 text-center'>
            <ThemeProvider theme={theme}>
               { window.onload= () => dispatch (obtermAccion()) }
                <Button onClick={() => dispatch (siguienteList())}>Siguiente</Button>
                <Button onClick={() => dispatch (antesList())}>Anterior</Button>
            </ThemeProvider>
            </div>
        </div>
        <div className='row' >
                  { personaje.map(per => { 
                      return( 
                        <div  className='col' key={per.id}>
                          <div  className='card'>
                            <img src={per.image} alt="" />
                              <h5 className=' mt-2'>
                                  Nombre:    {per.name}
                              </h5>
                              <h5>
                                  Especie: {per.species}
                              </h5>
                              <h5>
                                Estado : {per.status}
                              </h5>
                          </div>

                        </div>
                  )})
                  }
        </div>
    </div>
  )
}

export default ListaPer;
