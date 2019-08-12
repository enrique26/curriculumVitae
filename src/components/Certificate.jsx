import React from 'react';
import H2styled from '../styled/H2styled';
import H3styled from '../styled/H3styled';
import Pstyled from '../styled/Pstyled';

const Certificate = props =>(
  <div className="Certificate">
    <H2styled name={"Certificate"} />
    <div className="Certificate-container">

      {
        props.data.map( (data, index)=>(
          <div className="Certificate-item" key={"CerIt"+index}>
            <H3styled>{data.name} - {data.institution}
            <span>Date: {data.date}</span>
            </H3styled>
            <Pstyled>{data.description}</Pstyled>
          </div>
        ))
      }

    </div>
  </div>
);


export default Certificate;
