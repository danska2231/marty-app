import React from "react";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey, green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      main: green[100],
    },
  },
});
const Navegacion = ({brand}) =>{
    return( <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar> 
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {brand}
          </Typography>
          <Link to = '/'><Button color="secondary">Inicio</Button></Link>
          <Link to = '/personajes'><Button color="secondary"> Personajes</Button></Link>
          <Link to = '/videos'><Button color="secondary">Videos</Button></Link>
          <Link to = '/creadores'><Button color="secondary">Creadores</Button></Link>
          
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
    )
}
export default Navegacion;