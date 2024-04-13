
import './Styles/App.scss'
import './Styles/intro.scss'
import './Styles/Section.scss'
import './Styles/Footer.scss'
import './Styles/Misc.scss'
import './Styles/mediaQuery.scss'
import { useEffect, useState } from "react";


import IntroVideo from './Components/IntroVideo'
import Section from './Components/Section'
import freshTopicImg from './Assets/academy.png'
import freshTopic2Img from './Assets/story.png'
import tedTalksImg from './Assets/in-the-news.gif'
import franchiseImg from './Assets/franchise.gif'
import mapImg from './Assets/locations.png'
import coursesImg from './Assets/image2.png'
import albumImg from './Assets/mba-cares.gif'
import baratImg from './Assets/image1.png'
import chaivalaImg from './Assets/image3.png'
import data from './Data/data.json'
import Misc from './Components/Misc'
import Footer from './Components/Footer'
import Loader from './Components/Loader'




const yellow = "#fff100",
  pink = "#ed1e79",
  white = "#fff",
  brown = "#6d3d0f";
function App() {
  const {freshTopic,freshTopic2,tedTalks,franchise,map,courses,album,barat,chaiwala} = data;

  
  const [loading, setLoading] = useState(true);

  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;

    const element = e.target;

    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover");
    } else if (element.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorHoverMini");
    } else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", dotCursor);

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", dotCursor);
    };
  }, []);

  return( <>
  {loading && <Loader />}
  <IntroVideo />
  <Section  
  h3={freshTopic.heading}
  text={freshTopic.text}
  btnTxt={freshTopic.btn}
  imgSrc={freshTopicImg}
       backgroundColor={pink}
        headingColor={yellow}
         textColor={yellow}
          btnBgColor={yellow}
           btnColor={pink}
  />
  
  <Section  
  h3={freshTopic2.heading}
  text={freshTopic2.text}
  btnTxt={freshTopic2.btn}
  imgSrc={freshTopic2Img}
       backgroundColor={pink}
        headingColor={yellow}
         textColor={yellow}
          btnBgColor={yellow}
           btnColor={pink}
  />
  <Section  
  h3={tedTalks.heading}
  text={tedTalks.text}
  btnTxt={tedTalks.btn}
  imgSrc={tedTalksImg}
       backgroundColor={yellow}
        headingColor={pink}
         textColor={pink}
          btnBgColor={pink}
           btnColor={yellow}
  />
  <Section  
  h3={franchise.heading}
  text={franchise.text}
  btnTxt={franchise.btn}
  imgSrc={franchiseImg}
       backgroundColor={white}
        headingColor={pink}
         textColor={brown}
          btnBgColor={brown}
           btnColor={yellow}
  />
  <Section  
  h3={map.heading}
  text={map.text}
  // btnTxt={map.btn}
  imgSrc={mapImg}
       backgroundColor={pink}
        headingColor={yellow}
         textColor={yellow}
         btnColor={yellow}
         btnBgColor={brown}
         hasBtn={false}
  />
  <Section  
  h3={courses.heading}
  text={courses.text}
  btnTxt={courses.btn}
  imgSrc={coursesImg}
  imgSize={"30%"}
       backgroundColor={yellow}
        headingColor={pink}
         textColor={pink}
         btnBgColor={pink}
         btnColor={yellow}
  />
  <Section  
  h3={album.heading}
  text={album.text}
  btnTxt={album.btn}
  imgSrc={albumImg}
       backgroundColor={white}
        headingColor={pink}
         textColor={brown}
         btnBgColor={brown}
         btnColor={yellow}
  />
  <Section  
  h3={barat.heading}
  text={barat.text}
  btnTxt={barat.btn}
  imgSrc={baratImg}
  imgSize={'45%'}
       backgroundColor={pink}
        headingColor={yellow}
         textColor={yellow}
         btnBgColor={yellow}
         btnColor={pink}
  />
  
  <Section  
  h3={chaiwala.heading}
  text={chaiwala.text}
  btnTxt={chaiwala.btn}
  imgSrc={chaivalaImg}
       backgroundColor={white}
        headingColor={pink}
         textColor={brown}
         btnBgColor={brown}
         btnColor={yellow}
  />
  <Footer />
  <Misc />
  </>
  

)
}

export default App;
