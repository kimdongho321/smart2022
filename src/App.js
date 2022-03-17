import './App.css';
import faker from '@faker-js/faker';
import faker_ko from '@faker-js/faker/locale/ko';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
function App() {
  const userDatas = [];

  while(userDatas.length < 50){
    userDatas.push({
      avatar: faker.image.avatar() ,
      name: `${faker_ko.name.lastName()} ${faker_ko.name.firstName()}`,
      email: faker.internet.email()  ,
      jobTitle: faker.name.jobTitle() ,
      phonNo: faker_ko.phone.phoneNumber()
    })
}

  const userCards = userDatas.map((userData, index) =>{ 
    return <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia

        component="img"
        height="140"
        image={userData.avatar}
        alt="green iguana"

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {userData.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {userData.email}<br></br>
          {userData.jobTitle}<br></br>
          {userData.phonNo}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  });

  const userData = {
    avatar: faker.image.avatar() ,
    name: `${faker_ko.name.lastName()} ${faker_ko.name.firstName()}`,
    email: faker.internet.email()  ,
    jobTitle: faker.name.jobTitle() ,
    phonNo: faker_ko.phone.phoneNumber()
  }
  
  return (
    <div className="App">
      {userCards}
    </div>
  );
}

export default App;
