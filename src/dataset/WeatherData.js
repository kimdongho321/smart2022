import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import OpacityIcon from '@mui/icons-material/Opacity';
import WaterIcon from '@mui/icons-material/Water';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AirIcon from '@mui/icons-material/Air';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

export const cityLatLon =[
    { name: "서울", lat: 37.532600, lon: 127.024612},
    { name: "안양", lat: 37.41053, lon: 126.91122},
    { name: "부산", lat: 35.166668, lon: 129.066666},
    { name: "대전", lat: 11, lon: 11},
    { name: "광주", lat: 11, lon: 11},
    { name: "울산", lat: 11, lon: 11},
    { name: "시흥", lat: 11, lon: 11},
    { name: "파리", lat: 48.8566, lon: 2.3522},

]
export const weather_mapping_data = {
    Thunderstorm : {
        name: "폭우",
        icon: ThunderstormIcon
    },
    Drizzle: {
        name: '이슬비',
        icon: OpacityIcon
    },
    Rain : {
        name: '비',
        icon: WaterIcon
    },
    Snow : {
        name: '눈',
        icon: AcUnitIcon
    },
    Atmosphere : {
        name: '대기',
        icon: AirIcon
    },
    Clear : {
        name: '맑음',
        icon: WbSunnyIcon
    },
    Cloud : {
        name: '구름',
        icon : CloudIcon
    },
    Mist: {
         name: '안개',
         icon :CloudQueueIcon
    }
}