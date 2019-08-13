import React from 'react';
import H2styled from '../styled/H2styled';
import H3styled from '../styled/H3styled';
import Pstyled from '../styled/Pstyled';


const Education = props =>(
  <div className="Education">
    <H2styled name={"Education"} />
    <div className="Education-container">

      {
        props.data.map( (data,index)=>(
          <div className="Education-item" key={"EduIt"+index}>
            <H3styled>{data.institution} {data.degree} / <span>{data.startDate} - {data.endDate}</span>
            </H3styled>
            <Pstyled name={data.description}/>
          </div>
        ) )
      }


    </div>
  </div>
);


export default Education;
