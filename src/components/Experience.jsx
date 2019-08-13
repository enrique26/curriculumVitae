import React from 'react';
import H2styled from '../styled/H2styled';
import H3styled from '../styled/H3styled';
import Pstyled from '../styled/Pstyled';

const Experience = props =>(

  <div className="Experience">
    <H2styled name={"Experience"} />
    <div className="Experience-container">
      {
        props.data.map( (data,index) => (<div className="Experience-item" key={"ExpIt"+index}>
              <H3styled>{data.company} / <span>{data.startDate} - {data.endDate}</span>
              </H3styled>
              <Pstyled>{data.jobDescription}</Pstyled>
            </div>
          ))
      }
    </div>
  </div>
);


export default Experience;
