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

const About = ({ ...props }) => (
  <AboutStyle>
    <div className="About-container">
      <AboutAvatar>
        <figure>
          <AboutImage src={props.avatar} alt=""/>
        </figure>
      </AboutAvatar>
      <div className="About-name">
        <h2>{props.name}</h2>
      </div>
      <div className="About-rofession">
        <p>{props.profession}</p>
      </div>
      <div className="About-desc">
        <p>{props.bio}</p>
      </div>
      <div className="About-location">
        <p>{props.address}</p>
      </div>
      <div className="About-social">
        <Social social={props.social}></Social>
      </div>
    </div>
  </AboutStyle>
);




export default About;
