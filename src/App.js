import './App.css';
import faker from '@faker-js/faker';
import faker_ko from '@faker-js/faker/locale/ko';
import UserCard from './component/UserCard'

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

  const userCards = userDatas.map((userData, idx) =>{ 
    return <UserCard userData={userData} idx={idx} />
  });

  
  return (
    <div className="App">
      {userCards}
    </div>
  );
}

export default App;
