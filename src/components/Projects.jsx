import React from 'react';
import H2styled from '../styled/H2styled';
import H3styled from '../styled/H3styled';
import Pstyled from '../styled/Pstyled';

const Projects = props =>(
  <div className="Projects">
    { props.data.length > 0 && <H2styled name={"Projects"} />}
    <div className="Projects-container">
      {
        props.data.map( (data, index)=>(
          <div className="Projects-item" key={"ProjIt"+index}>
            <H3styled>{data.name} - <span>Date: {data.date}</span>
            </H3styled>
            { data.url != "" && <a href={data.url}>site<a>}
            <Pstyled>{data.description}</Pstyled>
            <Pstyled>{data.technologies}</Pstyled>
            <Pstyled>{data.responsabilities}</Pstyled>

          </div>
        ))
      }

    </div>
  </div>
);


export default Projects;
