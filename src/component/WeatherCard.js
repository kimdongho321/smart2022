import Typography from '@mui/material/Typography';
import { Box } from '@mui/material/Box';

function WeatherCard(props) {
    console.log(props)
    const {WeatherData, apiError} = props;

    return <>
    {apiError ? 
        <Typography>{apiError.message}</Typography>
        :
        WeatherData ?
        <Box>
            <Typography>{`현재온도: ${WeatherData.main.temp}℃`}</Typography>
            <Typography>{`체감온도: ${WeatherData.main.feels_like}℃`}</Typography>
            <Typography>{`최저기온: ${WeatherData.main.temp_min}℃`}</Typography>
            <Typography>{`최고기온: ${WeatherData.main.temp_max}℃`}</Typography>
            <Typography>{`습도: ${WeatherData.main.humidity}%`}</Typography>
        </Box>  
        :
        <Typography>날씨정보 없음</Typography>
    }
    </>

}

export default WeatherCard;