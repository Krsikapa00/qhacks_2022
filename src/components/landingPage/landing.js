import React, {useState, useRef, useEffect} from "react";
//import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";
import "./landingPage.css";
import '../../App.css';
//import backgroundImage from "../../assets/images/backgrounds/landingBG2.png";
import graphicMobile from "../../assets/images/backgrounds/backgroundMobile.png";
//import waveLineRed from "../../assets/images/backgrounds/waveLineRed.png";
import logo from "../../assets/images/logo/qhacksCrown-colored.svg";
import word from "../../assets/images/logo/qhacksWordmark-colored.svg";
import graphic from "../../assets/images/backgrounds/puzzlePieces.png";
import wave from "../../assets/images/backgrounds/DottedLineGraphicred.png";
import MailChimpForm from "./mailChimpForm";



function Landing() {

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  
  let interval = useRef;
  
  const startTimer = () => {
      const countDownDate = new Date('November 25 2020 17:00:00').getTime();
  
      interval = setInterval(()=>{
        const now = new Date().getTime(); 
        const distance = countDownDate - now; 

        const days = Math.floor(distance/(1000*60*60*24));
        const hours = Math.floor((distance%(1000*60*60*24)/(1000*60*60)));
        const minutes = Math.floor((distance%(1000*60*60)/(1000*60)));
        const seconds = Math.floor((distance%(1000*60)) / 1000);


        if (distance < 0){
          clearInterval(interval.current);
        }else{
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }

      }, 1000);
  };

useEffect(()=>{
  startTimer();
  return() =>{
    clearInterval(interval.current);
  };
});



  return (
    <section className="landingCSS ">
      <ContentWrapper>
        <div className="div1 sidePadding">
          <img src={graphic} className = "landingGraphic" alt="QHacks Graphic"/>
          <div className="div2">
            <div>
              <img src={word} className = "qhacksWord" alt="QHacks Wordmark"/>
              <img src={logo} className = "logo" alt="QHacks Wordmark"/>
            </div>
            <h2 data-cy="qhacks-information" className = "information">
              Queen???s University ??? January 28th - 30th, 2022
            </h2>
            <h2 data-cy="qhacks-tagline" className = "tagline">
              Queen???s University???s annual hackathon.
              <br />
              Join our mailing list to keep up to date!
            </h2>
            <div className="formContainer">
            <MailChimpForm></MailChimpForm>
            </div>
          </div>
           {/* <ActionButton
            dataCy="apply-button"
            backgroundColor="#696969"
            foregroundColor="#ffffff"
            hoverBackgroundColor="#585858"
            hoverForegroundColor="#ffffff"
            style={applyButtonCSS}
            link="https://app.qhacks.io/"
            type="rounded"
          >
            Applications are now closed
          </ActionButton> */}
        </div>
        <div className="div3 sidePadding">
          <div>
              <img src={word} className = "qhacksWord" alt="QHacks Wordmark"/>
              <img src={logo} className = "logo" alt="QHacks Wordmark"/>
            </div>
            <h2 data-cy="qhacks-information" className = "information">
            Queen???s University ??? January 28th - 30th, 2022
            </h2>
            <h2 data-cy="qhacks-information" className = "information2">
              Queen???s University <br/> January 28th - 30th, 2022
            </h2>
            <h2 data-cy="qhacks-tagline" className = "tagline">
              Queen???s University???s annual hackathon.
              <br />
              <br />
              Join our mailing list to keep up to date!
            </h2>
            <div className="formContainer">
            <MailChimpForm></MailChimpForm>
            </div>
      </div>

        <div className = "frame">
          <h1 className="interconnected" >
            Interconnected
          </h1>
        </div>
            
      </ContentWrapper>
      
    </section>
  );
}

export default Landing;