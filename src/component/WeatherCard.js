import Typography from '@mui/material/Typography';
import { Box } from '@mui/material/Box';

function WeatherCard(props) {
    console.log(props)
    const {WeatherData, apiError} = props;

    const makeWeatherInfo = () =>{
        const {temp, feels_like, temp_min, temp_max,pressure,humidity} = WeatherData.main;
        return <Box>
            <Typography>{`현재온도: ${temp}℃`}</Typography>
            <Typography>{`체감온도: ${feels_like}℃`}</Typography>
            <Typography>{`최저기온: ${temp_min}℃`}</Typography>
            <Typography>{`최고기온: ${temp_max}℃`}</Typography>
            <Typography>{`습도: ${humidity}%`}</Typography>
        </Box>
    }

/*
 "main": {
        "temp": 287.97,
        "feels_like": 286.66,
        "temp_min": 284.94,
        "temp_max": 288.02,
        "pressure": 1023,
        "humidity": 44
    }
 */


    return
    <>
    {apiError ? 
        <Typography>{apiError.message}</Typography>
        :
        WeatherData ?
        {makeWeatherInfo}  
        :
        <Typography>날씨정보 없음</Typography>
    }
    </>

}

export default WeatherCard;