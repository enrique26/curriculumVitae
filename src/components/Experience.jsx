import React from 'react';


const Experience = props =>(

  <div className="Experience">
    <div className="Experience-container">
      experiencia
      {
        props.data.map( (data,index) => (<div className="Experience-item" key={"ExpIt"+index}>
              <h3>{data.company}</h3>
              <span>{data.startDate} - {data.endDate}</span>
              <p>{data.jobDescription}</p>
            </div>
          ))
      }
    </div>
  </div>
);


export default Experience;
