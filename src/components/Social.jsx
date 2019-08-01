import React from 'react';


const Social = props => (

  <div className="Skills">
    {
      props.social &&
      <ul>
        {
          props.social.map( (data,index)=>(
            <li key={"SkIt"+index}>
              <a href={data.url} target="_blank">{ data.name} </a>
            </li>
          ))
        }
      </ul>
    }
  </div>
)

export default Social
