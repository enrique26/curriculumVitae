import React from 'react';
import styled,{keyframes} from 'styled-components';
import H2styled from '../styled/H2styled';
const SkillsContainer=styled.div`
   display:grid;
   grid-template-columns:repeat(3,1fr);
   grid-gap:2rem;
   grid-row-gap:.5em;
`;

const Skilsh5=styled.h5`
  margin:.5em 0;

`;

const SkilsLine=styled.div`
  height:8px;
  position:relative;
  border-radius:50px;
  background:#cafccc;
`;

const move = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 50px 50px; }

`;


const SkillsSpan=styled.span`
  display:block;
  height:100%;
  width:${props => props.width};
  border-radius:8px;
  background-color:#3ccf79;
  overflow:hidden;
  position:relative;
  box-shadow:inset 0 2px 9px rgba(255,255,255,0.3), inset 0 -2px 6px rgba(0,0,0,0.4);

  &:after {
    content : "";
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-image:linear-gradient(-45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50% ,rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent);
    z-index:1;
    background-size: 50px 50px;
    animation:${ move } 4s linear infinite;
    overflow:hidden;
  }
`;

const Skills = props =>(
  <div className="Skills">
    { (props.data.length) > 0 && <H2styled name={"Skills"} />}
    <SkillsContainer>
    {
      props.data.map( (data,index)=> (
        <div className="Skills-item" key={"SkiIt"+index}>
          <h5>{data.name}</h5>
          <SkilsLine>
            <SkillsSpan width={data.percentage} />
          </SkilsLine>
        </div>
      ) )
    }
    </SkillsContainer>
  </div>
);

export default Skills;
