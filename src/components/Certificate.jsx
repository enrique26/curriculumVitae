import React from 'react';


const Certificate = props =>(
  <div className="Certificate">
    <div className="Certificate-container">

      {
        props.data.map( (data, index)=>(
          <div className="Certificate-item" key={"CerIt"+index}>
            <h3>{data.name}</h3>
            <p>{data.institution}</p>
            <span>Date: {data.date}</span>
            <p>{data.description}</p>
          </div>
        ))
      }

    </div>
  </div>
);


export default Certificate;
