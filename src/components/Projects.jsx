import React from 'react';
import H2styled from '../styled/H2styled';
import H3styled from '../styled/H3styled';
import Pstyled from '../styled/Pstyled';
import styled from 'styled-components';


const Projects = props =>(
  <div className="Projects">
    { (props.data.length) > 0 && <H2styled name={"Some projects"} />}
    <div className="Projects-container">
      {
        props.data.map( (data, index)=>(
          <div className="Projects-item" key={"ProjIt"+index}>
            <H3styled>{data.name} - <span>{data.date}</span>
            </H3styled>
            <Pstyled name={"Decription: "+data.description}></Pstyled>
            <Pstyled name={"Technologies: "+data.technologies}></Pstyled>
            <Pstyled name={"Responsabilities: "+data.responsabilities}></Pstyled>
            { data.url != "" && <a href={data.url}>View</a>}

          </div>
        ))
      }

    </div>
  </div>
);


export default Projects;
