import dog from './dog.jpg';
import { faker } from "@faker-js/faker";

const textData = [
  {
  text : "ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㅁㄴㅇㅁㅇㄻㄴㅇ",
  imgUrl : "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201901/20/28017477-0365-4a43-b546-008b603da621.jpg",
  },
  {
  text: "ㅈㄱㅈㄱㅈㄷㄱㅈㄷㄱㅈㄱㅈㄱㅈㄱㅈㄱㅈㄷㄱㅈ",
  imgUrl: "https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_262/%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg"
  },
  {
    text: "ㅈㄱㅈㄱㅈㄷㄱㅈㄷㄱㅈㄱㅈㄱㅈㄱㅈㄱㅈㄷㄱㅈ",
    imgUrl: "https://cdn.mkhealth.co.kr/news/photo/202102/52163_52859_5928.jpg"
    }
]

function DogMain(props) {
  const h1Element = <h1>{props.title}</h1>
  const imgElement = <img src={dog} className="App-logo" alt="dog"></img>
  
  return (
    <>
        {h1Element}
        {imgElement}
             <p>
               한글
             </p>
             <ul>
               {textData.map((contents)=>{
               return <div>
                 <img src={faker.image.cats()} alt="강아지 사진" />
                 {contents.text}
                 <img src={faker.image.avatar()} alt="강아지 사진" />
                 </div>
               })}
             </ul>
    </>
  );
}

export default DogMain;