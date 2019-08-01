import React from 'react';

const Skills = props =>(
  <div className="Skills">
    <div className="Skills-container">

    {
      props.data.map( (data,index)=> (
        <div className="Skills-item" key={"SkiIt"+index}>
          <h5>{data.name}</h5>
          <div className="Skills-line">
            <span>{data.percent}</span>
          </div>
        </div>
      ) )
    }


    </div>
  </div>
);

export default Skills;
