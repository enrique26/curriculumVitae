import React from 'react';


const Education = props =>(
  <div className="Education">
    <div className="Education-container">

      {
        props.data.map( (data,index)=>(
          <div className="Education-item" key={"EduIt"+index}>
            <h3>{data.institution} {data.degree}</h3>
            <span>{data.startDate} - {data.endDate}</span>
            <p>{data.description}</p>
          </div>
        ) )
      }


    </div>
  </div>
);


export default Education;
