import React, {useState,useEffect} from "react";
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import {weather_mapping_data, cityLatLon} from "../dataset/WeatherData";
import axios from 'axios';
import { FormControl, InputLabel,Select, MenuItem} from '@mui/material';
function WeatherCard(props) {
    const {id} = props;
   /* const defaultCityName =localStorage.getItem(id+'_city');*/
    const [weatherData, setWeatherData] = useState(null);
    const [apiError, setApiError] = useState(null);
    const [selectedCityData, setSelectedCityData] = useState({ name: "안양", lat: 37.41053, lon: 126.91122});
  
    const selectHandleChange = (event) =>{
        const cityName = event.target.value;
        //const findCityName = cityLatLon.find(data => data.name === selectedCityName);
        setSelectedCityData()
        localStorage.setItem(id+'_city', cityName);
      };

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

    const makeWeatherInfo = () => {
        const { temp, temp_min, temp_max, feels_like, humidity} = weatherData.main;
        const { main, icon } = weatherData.weather[0];
        const parseWeatherData = weather_mapping_data[main] ? weather_mapping_data[main] : weather_mapping_data["Mist"]

        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        return <Grid item xs={2} sm={4} md={4}>
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
            <Typography>{`현재날씨: ${parseWeatherData.name}`}</Typography>
            <parseWeatherData.icon sx={{fontSize: 125, color: 'red'}} />
            <img src={iconUrl} alt="아이콘"/>
            <Typography>{`현재온도: ${temp}℃ 체감온도: ${feels_like}℃`}</Typography>
            <Typography>{`최저기온: ${temp_min}℃ 최고기온: ${temp_max}℃ 습도: ${humidity}%`}</Typography>
        </Grid>
    }
    return <>
    {apiError ?
     <Typography>{apiError.message}</Typography>
     :
        weatherData ?
        makeWeatherInfo()
        :
     <Typography>날씨정보 없음</Typography>
    }
    </>
}

export default WeatherCard;