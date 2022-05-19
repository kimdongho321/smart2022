import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import './App.css';
import React, { useEffect, useState } from 'react';
import UserCardList from './component/UserCardList';
import { makeUserDatas } from './Utils';
import WeatherCard from './component/WeatherCard';
import Grid from '@mui/material/Grid';
import TopBar from './component/TopBar';

const userDatas = makeUserDatas(15);

 function App() {
const [useDarkMode, setUseDarkMode] = useState(true);
const [weatherData, setWeatherData] = useState(null);
const [apiError, setApiError] = useState(null);
  const handleChange = (event) => {
    setUseDarkMode(event.target.checked);
  };

   useEffect(() => {
   }, [useDarkMode]);
  
   console.log("render");

  return (
    <ThemeProvider theme={createTheme({
      palette: {
        mode: useDarkMode? 'dark' : 'light',
      },
    })
  }>
    <Box sx={{minheight: '100%',bgcolor: 'background.default',color: 'text.primary',p: 1,}}>
    
    <TopBar />
    
    <Container maxWidth="lg" sx={{p:1}}>
    <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12}}>
      {[1,2,3,4,5,6,7,8,9].map((no) => {
      return <WeatherCard id={no} weatherData={weatherData} apiError={apiError}/> 
      })
 };
    </Grid>

    

    <Switch
      defaultChecked color="warning" 
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
      
  

    <UserCardList userDatas={userDatas}/>

    </Container>
    </Box>
    </ThemeProvider>
  );
}

export default App;