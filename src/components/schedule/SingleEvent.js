import React from "react"; 
import ContentWrapper from "./ContentWrapper";

const twoColumnStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  marginBottom: "48px",
};

const titleStyle = {
  paddingBottom: "15px"
}

const flexChildStyle = {
  flex: 1,
  textAlign: "center",
  minWidth: "300px",
  margin: "0 28px 32px 28px",
  maxWidth: "510px"
};

const blurbStyle = {
  margin: "32px auto",
  fontSize: "15px",
  lineHeight: "24px",
  maxWidth: "500px",
  textAlign: "left"
};

const imgStyle = {
  maxHeight: "320px",
  maxWidth: "475px",
  width: "100%"
};

const wrapper = {
  width: "100%",
  background: "#ffffff",
  borderRadius: "10px",
  padding: "50px 0 20px 0",
  margin: "auto",
  "@media(maxWidth: 840px)": {
    padding: "80px 0 30px 0"
  }
}

const line = {
  marginBottom: "30px",
  borderColor: "#00205b",
  backgroundColor: '#00205b',
  height: "3px"
}


export default function SingleEvent(props) {
  return(
    <div style ={{ background: "#fff", position: "relative"}}> 
    <ContentWrapper>
      <div style={wrapper}>
      <h1 style = {titleStyle}>{props.event.day}</h1>
      <hr style = {line}></hr>
        <div style = {{...twoColumnStyle, flexWrap: "wrap"}}>
          <div style ={flexChildStyle}>
            <h1>{props.event.eventTitle1}</h1>
            <p style={blurbStyle}>
                {props.event.eventText1}
            </p>
          </div>
          <div style ={flexChildStyle}>
            <picture style={imgStyle}>
              <source srcSet={props.event.imageSrc1} type="image/jpg" />
              <img
                style={imgStyle}
                src = {props.event.imageSrc1}
                alt="Hackers in a workshop"
              />
            </picture>
          </div>
        </div>
        <div style={{...twoColumnStyle, flexWrap: "wrap-reverse", marginBottom: 0}}>
          <div style ={flexChildStyle}>
            <picture style={imgStyle}>
              <source srcSet={props.event.imageSrc2} type="image/jpg" />
              <img
                style={imgStyle}
                src = {props.event.imageSrc2}
                alt="Hackers in a workshop"
              />
            </picture>
          </div>
          <div style ={flexChildStyle}>
            <h1>{props.event.eventTitle2}</h1>
            <p style={blurbStyle}>
              {props.event.eventText2}
            </p>
          </div>
        </div>
      </div>
    </ContentWrapper>
  </div>
  ); 
}




