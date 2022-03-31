import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import './App.css';
import React, { useState } from 'react';
import UserCardList from './component/UserCardList';
import { makeUserDatas } from './Utils';
import axios from 'axios';
import WeatherCard from './component/WeatherCard';
import { useEffect } from 'react';

const userDatas = makeUserDatas(5000);

function App() {
  const [useDarkMode, setUseDarkMode] = useState(true);
  const [WeatherData, setWeatherData] = useState(null);

  const handleChange = (event) => {
    setUseDarkMode(event.target.checked);
  }
  
  useEffect(() => {
    const callApi = async() =>{
      try{
        const result = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=37.3943&lon=126.9568&appid=5115ff5f46daf90bcd3cffeee8ae706e&unit=metric&appid=5115ff5f46daf90bcd3cffeee8ae706e")
      }catch(err){
        setApiError(err);
      }
    }
  }
  callApi();
  console.log("component did mount");
},[]);


  return (
    <ThemeProvider theme={createTheme({
        palette: {
          mode: useDarkMode ? 'dark' : 'light',
        },
      })
    }>
      <Box sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 1,
      }}>
        <WeatherCard WeatherData/>
      </Box>

      <Box sx={{
        height: '100%',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 1,
      }}>
        <Switch
          checked={useDarkMode}
          onChange={handleChange}
          color="secondary"
          inputProps={{ 'aria-label': 'controlled' }}
          />
        <Container maxWidth="lg" sx={{p:1}}>
          <UserCardList userDatas={userDatas}/>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;