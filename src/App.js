import './App.css';
import faker, { Faker } from '@faker-js/faker';
import faker_ko from '@faker-js/faker/locale/ko';
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

  const userCards = userDatas.map((userData) =>{ 
    return <>
      <h4>{userData.jobTitle}</h4>
        <img src={userData.avatar} alt="사용자 프로필용 아바타"></img>
        <h5>{userData.name}</h5>
        {userData.email} <br />
        {userData.phonNo} 
    </>
  });

  const userData = {
    avatar: faker.image.avatar() ,
    name: `${faker_ko.name.lastName()} ${faker_ko.name.firstName()}`,
    email: faker.internet.email()  ,
    jobTitle: faker.name.jobTitle() ,
    phonNo: faker_ko.phone.phoneNumber()
  }

  console.log(userDatas)
  
  return (
    <div className="App">
      {userCards}
    </div>
  );
}

export default App;
