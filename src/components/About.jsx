import React from 'react';
import Social from './Social';
import styled from 'styled-components';


const AboutStyle = styled.div `
  text-align:center;
`;

const AboutAvatar = styled.div`
  padding:2em 0 0 0;
`;

const AboutImage = styled.img`
  border-radius: 100%;
  width: 150px;
  height: 150px;
  border: 2px solid #a4b3c3;
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 10px rgba(0,0,0,0.6);
`;


const AboutName= styled.div`
  text-align:center;
`;

const AboutH2 = styled.h2`
  font-family:"Roboto", sans-serif;
  font-weight:400;
  letter-spacing:1.2px;
  margin:.5em 0 0 0;
  color:#a4b3c3;
`;

const AboutProfession=styled.p`
  margin : .2em 0 1em 0;
  letter-spacing:1.6px;
  font-weight:300;
  color:#a4b3c3;
`;

const AboutBio=styled.p`
  color:#757575;
  font-size:1em;
  font-weight:300;
`;
const AboutLocation=styled.p`
  color:#757575;
  font-size:1em;
  font-weight:400;
`;

const About = ({ ...props }) => (
  <AboutStyle>
    <div className="About-container">
      <AboutAvatar>
        <figure>
          <AboutImage src={props.avatar} alt=""/>
        </figure>
      </AboutAvatar>
      <AboutName>
        <AboutH2>{props.name}</AboutH2>
      </AboutName>
      <AboutProfession>
        {props.profession}
      </AboutProfession>
      <div className="About-desc">
        <AboutBio>{props.bio}</AboutBio>
      </div>
      <div className="About-location">
        <AboutLocation>{props.address}</AboutLocation>
      </div>
      <div className="About-social">
        <Social social={props.social}></Social>
      </div>
    </div>
  </AboutStyle>
);




export default About;
