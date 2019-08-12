import React from 'react';
import styled, { ThemeProvider } from 'styled-components';


const SocialDiv=styled.div`
 margin: 0 auto;
 display: block;
`;

const SocialUl=styled.ul`
  list-style-type:none;
  margin:0;
  padding:0;
`;

const SocialLi=styled.li`
  display:inline;
  margin: 0 1em 0 0;
`;

const SocialAnchor=styled.a`
  color:#212121;
  text-decoration:none;
  font-size:1.2em;
`;

const SocialIcon=styled.i`
 color:${props => props.theme.color};
`;

//themes
const facebook = {
  color:"#3b5998"
}

const twitter = {
  color:"#38a1f3"
}

const linkedin = {
  color:"#0e76a8"
}

const github = {
  color:"#333"
}

const getcolor = (name) => {

  if(name=="facebook"){
    return facebook;
  }else if(name=="twitter"){
    return twitter
  }else if(name=="linkedin"){
    return linkedin
  }else if(name=="github"){
    return github
  }

}


const Social = props => (

  <SocialDiv>
    {
      props.social &&
      <SocialUl>
        {
          props.social.map( (data,index)=>(
            <SocialLi key={"SkIt"+index}>
              <SocialAnchor href={data.url} target="_blank">
                <ThemeProvider theme={getcolor(data.name)}>
                  <SocialIcon className={`fab fa-${data.name}`}></SocialIcon>
                </ThemeProvider>
              </SocialAnchor>
            </SocialLi>
          ))
        }
      </SocialUl>
    }
  </SocialDiv>
)

export default Social
