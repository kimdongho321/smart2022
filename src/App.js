import Container from '@mui/material/Container';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import './App.css';
import React, { useEffect, useState } from 'react';
import UserCardList from './component/UserCardList';
import { makeUserDatas } from './Utils';
import axios from 'axios';
import WeatherCard from './component/WeatherCard';
import {cityLatLon} from './dataset/WeatherData'
import { FormControl, InputLabel,Select, MenuItem} from '@mui/material';
import Grid from '@mui/material/Grid';

const userDatas = makeUserDatas(15);

  const UserDatas = [];

 function App() {
const [useDarkMode, setUseDarkMode] = useState(true);
const [weatherData, setWeatherData] = useState(null);
const [apiError, setApiError] = useState(null);
const [selectedCityData, setSelectedCityData] = useState({ name: "안양", lat: 37.41053, lon: 126.91122});
  
  const handleChange = (event) => {
    setUseDarkMode(event.target.checked);
  };

    const selectHandleChange = (event) =>{
      console.log(event.target.value)
      //const findCityName = cityLatLon.find(data => data.name === selectedCityName);
      setSelectedCityData()
    };

    useEffect(() => {

    },[])

   useEffect(() => {
     const callApi = async() =>{
      try{
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${selectedCityData.lat}&lon=${selectedCityData.lon}8&appid=5115ff5f46daf90bcd3cffeee8ae706e`);
        setWeatherData(result.data);
        }catch(err){
          setApiError(err);
        }   
     }
     callApi();
    console.log("component did mount");
      
   }, [selectedCityData]);

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
    <Container maxWidth="lg" sx={{p:1}}>
  <FormControl>
    <InputLabel id="selected-city-label">Age</InputLabel>
    <Select
      labelId="selected-city-label"
      id="selected-city"
      value={selectedCityData.name}
      label="도시"
      onChange={selectHandleChange}
    >
      {cityLatLon.map((city) => <MenuItem value={city.name}>{city.name}</MenuItem>)}
    </Select>
  </FormControl>
    
    <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12}}>
      <WeatherCard weatherData={weatherData} apiError={apiError}/>
      <WeatherCard weatherData={weatherData} apiError={apiError}/>
      <WeatherCard weatherData={weatherData} apiError={apiError}/>
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